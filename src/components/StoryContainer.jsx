import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import StoryDisplay from "./StoryDisplay";
import ChoiceButtons from "./ChoiceButtons";
import {
  startStory,
  navigateToNode,
  restartStory,
  selectCurrentNodeId,
  selectVisitedNodes,
} from "../store/storySlice";
import "./StoryContainer.css";

function StoryContainer({ story }) {
  const dispatch = useDispatch();
  const currentNodeId = useSelector(selectCurrentNodeId);
  const visitedNodes = useSelector(selectVisitedNodes);

  // Initialize story on mount
  useEffect(() => {
    if (!currentNodeId) {
      dispatch(
        startStory({
          storyId: story.storyId,
          startNode: story.startNode,
        }),
      );
    }
  }, [dispatch, currentNodeId, story.storyId, story.startNode]);

  const currentNode = currentNodeId ? story.nodes[currentNodeId] : null;

  const handleChoiceSelect = (nextNodeId) => {
    dispatch(navigateToNode(nextNodeId));
  };

  const handleRestart = () => {
    dispatch(
      restartStory({
        storyId: story.storyId,
        startNode: story.startNode,
      }),
    );
  };

  if (!currentNode) {
    return (
      <div className="story-container">
        <div className="story-loading">Loading story...</div>
      </div>
    );
  }

  return (
    <div className="story-container">
      <header className="story-header">
        <h1 className="story-title">{story.title}</h1>
        <p className="story-author">by {story.author}</p>
      </header>

      <main className="story-main">
        <StoryDisplay node={currentNode} />

        {!currentNode.isEnding && (
          <ChoiceButtons
            choices={currentNode.choices}
            onChoiceSelect={handleChoiceSelect}
          />
        )}

        {currentNode.isEnding && (
          <div className="story-actions">
            <button className="restart-button" onClick={handleRestart}>
              Start New Story
            </button>
          </div>
        )}
      </main>

      <footer className="story-footer">
        <div className="progress-info">
          Nodes visited: {visitedNodes.length} /{" "}
          {Object.keys(story.nodes).length}
        </div>
      </footer>
    </div>
  );
}

StoryContainer.propTypes = {
  story: PropTypes.shape({
    storyId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    startNode: PropTypes.string.isRequired,
    nodes: PropTypes.object.isRequired,
  }).isRequired,
};

export default StoryContainer;
