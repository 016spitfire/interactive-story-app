import PropTypes from 'prop-types';
import './StoryDisplay.css';

function StoryDisplay({ node }) {
  if (!node) {
    return (
      <div className="story-display">
        <p className="story-text">Loading story...</p>
      </div>
    );
  }

  return (
    <div className="story-display">
      <div className="story-text">
        {node.text.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {node.isEnding && (
        <div className="ending-badge">
          <span>The End</span>
        </div>
      )}
    </div>
  );
}

StoryDisplay.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isEnding: PropTypes.bool.isRequired,
    choices: PropTypes.array
  })
};

export default StoryDisplay;
