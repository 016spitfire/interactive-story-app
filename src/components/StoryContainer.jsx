import { useState } from 'react';
import PropTypes from 'prop-types';
import StoryDisplay from './StoryDisplay';
import ChoiceButtons from './ChoiceButtons';
import './StoryContainer.css';

function StoryContainer({ story }) {
  const [currentNodeId, setCurrentNodeId] = useState(story.startNode);
  const [visitedNodes, setVisitedNodes] = useState([story.startNode]);

  const currentNode = story.nodes[currentNodeId];

  const handleChoiceSelect = (nextNodeId) => {
    setCurrentNodeId(nextNodeId);
    setVisitedNodes(prev => [...prev, nextNodeId]);
  };

  const handleRestart = () => {
    setCurrentNodeId(story.startNode);
    setVisitedNodes([story.startNode]);
  };

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
          Nodes visited: {visitedNodes.length} / {Object.keys(story.nodes).length}
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
    nodes: PropTypes.object.isRequired
  }).isRequired
};

export default StoryContainer;
