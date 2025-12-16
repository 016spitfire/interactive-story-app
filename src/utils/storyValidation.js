/**
 * Validates a story object to ensure all required fields and node references are valid
 */
export function validateStory(story) {
  const errors = [];

  // Check basic story structure
  if (!story) {
    errors.push("Story object is null or undefined");
    return { isValid: false, errors };
  }

  if (!story.storyId) {
    errors.push("Story is missing storyId");
  }

  if (!story.title) {
    errors.push("Story is missing title");
  }

  if (!story.startNode) {
    errors.push("Story is missing startNode");
  }

  if (!story.nodes || typeof story.nodes !== "object") {
    errors.push("Story is missing nodes object");
    return { isValid: false, errors };
  }

  // Check if start node exists
  if (story.startNode && !story.nodes[story.startNode]) {
    errors.push(`Start node "${story.startNode}" does not exist in nodes`);
  }

  // Validate each node
  const nodeIds = Object.keys(story.nodes);
  const referencedNodes = new Set();

  nodeIds.forEach((nodeId) => {
    const node = story.nodes[nodeId];

    // Check node structure
    if (!node.id) {
      errors.push(`Node "${nodeId}" is missing id field`);
    }

    if (!node.text) {
      errors.push(`Node "${nodeId}" is missing text field`);
    }

    if (node.isEnding === undefined) {
      errors.push(`Node "${nodeId}" is missing isEnding field`);
    }

    // Check ending nodes have endingTitle
    if (node.isEnding && !node.endingTitle) {
      errors.push(
        `Node "${nodeId}" is an ending but missing endingTitle field`,
      );
    }

    // Check choices if not an ending
    if (!node.isEnding) {
      if (!node.choices || !Array.isArray(node.choices)) {
        errors.push(
          `Node "${nodeId}" is not an ending but has no choices array`,
        );
      } else if (node.choices.length === 0) {
        errors.push(
          `Node "${nodeId}" is not an ending but has empty choices array`,
        );
      } else {
        // Validate each choice
        node.choices.forEach((choice, index) => {
          if (!choice.text) {
            errors.push(`Node "${nodeId}" choice ${index} is missing text`);
          }
          if (!choice.next) {
            errors.push(
              `Node "${nodeId}" choice ${index} is missing next node reference`,
            );
          } else {
            referencedNodes.add(choice.next);
          }
        });
      }
    }

    // Check that ending nodes have empty choices
    if (node.isEnding && node.choices && node.choices.length > 0) {
      errors.push(`Node "${nodeId}" is marked as ending but has choices`);
    }
  });

  // Check for broken node references
  referencedNodes.forEach((nodeId) => {
    if (!story.nodes[nodeId]) {
      errors.push(`Referenced node "${nodeId}" does not exist`);
    }
  });

  // Check for unreachable nodes (except start node)
  const reachableNodes = new Set([story.startNode]);
  const queue = [story.startNode];

  while (queue.length > 0) {
    const currentNodeId = queue.shift();
    const node = story.nodes[currentNodeId];

    if (node && node.choices) {
      node.choices.forEach((choice) => {
        if (!reachableNodes.has(choice.next)) {
          reachableNodes.add(choice.next);
          queue.push(choice.next);
        }
      });
    }
  }

  const unreachableNodes = nodeIds.filter((id) => !reachableNodes.has(id));
  if (unreachableNodes.length > 0) {
    errors.push(`Unreachable nodes found: ${unreachableNodes.join(", ")}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    stats: {
      totalNodes: nodeIds.length,
      reachableNodes: reachableNodes.size,
      unreachableNodes: unreachableNodes.length,
      endingNodes: nodeIds.filter((id) => story.nodes[id].isEnding).length,
    },
  };
}

/**
 * Checks if a specific node exists in a story
 */
export function nodeExists(story, nodeId) {
  return story && story.nodes && story.nodes[nodeId] !== undefined;
}

/**
 * Gets a safe node with error handling
 */
export function getSafeNode(story, nodeId) {
  if (!story || !story.nodes) {
    return null;
  }

  return story.nodes[nodeId] || null;
}

/**
 * Validates all stories in an array
 */
export function validateStories(stories) {
  if (!Array.isArray(stories)) {
    return {
      isValid: false,
      errors: ["Stories is not an array"],
      results: [],
    };
  }

  const results = stories.map((story, index) => ({
    index,
    storyId: story?.storyId || `unknown-${index}`,
    validation: validateStory(story),
  }));

  const allValid = results.every((result) => result.validation.isValid);

  return {
    isValid: allValid,
    results,
    summary: {
      total: stories.length,
      valid: results.filter((r) => r.validation.isValid).length,
      invalid: results.filter((r) => !r.validation.isValid).length,
    },
  };
}
