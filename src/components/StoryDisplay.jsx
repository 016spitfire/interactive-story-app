import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./StoryDisplay.css";

function StoryDisplay({ node }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade out
    setIsVisible(false);

    // Fade in after brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [node?.id]);

  if (!node) {
    return (
      <div className="story-display" role="article" aria-busy="true">
        <p className="story-text">Loading story...</p>
      </div>
    );
  }

  return (
    <article
      className={`story-display ${isVisible ? "visible" : ""}`}
      role="article"
      aria-label="Current story scene"
    >
      <div className="story-text" key={node.id}>
        {node.text.split("\n\n").map((paragraph, index) => (
          <p key={`${node.id}-p-${index}`}>{paragraph}</p>
        ))}
      </div>
      {node.isEnding && (
        <div
          className="ending-section"
          role="status"
          aria-label="Story ending reached"
        >
          <div className="ending-divider"></div>
          <div className="ending-title">
            THE END
            {node.endingTitle && (
              <>
                <br />
                <span className="ending-subtitle">{node.endingTitle}</span>
              </>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

StoryDisplay.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isEnding: PropTypes.bool.isRequired,
    endingTitle: PropTypes.string,
    choices: PropTypes.array,
  }),
};

export default StoryDisplay;
