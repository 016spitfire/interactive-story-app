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

function StoryContainer({ story, onBackToMenu }) {
  const dispatch = useDispatch();
  const currentNodeId = useSelector(selectCurrentNodeId);
  const visitedNodes = useSelector(selectVisitedNodes);

  // Initialize story on mount or when story changes
  useEffect(() => {
    dispatch(
      startStory({
        storyId: story.storyId,
        startNode: story.startNode,
      }),
    );
  }, [dispatch, story.storyId, story.startNode]);

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
      <div className="story-container" role="main" aria-live="polite">
        <div className="story-loading">Loading story...</div>
      </div>
    );
  }

  const progressPercent = Math.round(
    (visitedNodes.length / Object.keys(story.nodes).length) * 100,
  );

  return (
    <div className="story-container">
      <header className="story-header">
        {onBackToMenu && (
          <button
            className="back-to-menu-button"
            onClick={onBackToMenu}
            aria-label="Return to story menu"
          >
            ← Back to Stories
          </button>
        )}
        <h1 className="story-title">{story.title}</h1>
        <p className="story-author">by {story.author}</p>
      </header>

      <main className="story-main" role="main" aria-live="polite">
        <StoryDisplay node={currentNode} />

        {!currentNode.isEnding && (
          <ChoiceButtons
            choices={currentNode.choices}
            onChoiceSelect={handleChoiceSelect}
          />
        )}

        {currentNode.isEnding && (
          <div className="story-actions">
            <button
              className="restart-button"
              onClick={handleRestart}
              aria-label="Restart the story from the beginning"
            >
              Start New Story
            </button>
          </div>
        )}
      </main>

      <footer className="story-footer" role="contentinfo">
        <div
          className="progress-info"
          aria-label={`Story progress: ${visitedNodes.length} out of ${Object.keys(story.nodes).length} nodes visited, ${progressPercent} percent complete`}
        >
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
  onBackToMenu: PropTypes.func,
};

export default StoryContainer;
