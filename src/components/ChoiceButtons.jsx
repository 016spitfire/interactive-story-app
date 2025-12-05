import PropTypes from "prop-types";
import "./ChoiceButtons.css";

function ChoiceButtons({ choices, onChoiceSelect, disabled = false }) {
  if (!choices || choices.length === 0) {
    return null;
  }

  return (
    <nav
      className="choice-buttons"
      role="navigation"
      aria-label="Story choices"
    >
      {choices.map((choice, index) => (
        <button
          key={index}
          className="choice-button"
          onClick={() => onChoiceSelect(choice.next)}
          disabled={disabled}
          aria-label={`Choice ${index + 1}: ${choice.text}`}
        >
          <span className="choice-text">{choice.text}</span>
          <span className="choice-arrow" aria-hidden="true">
            →
          </span>
        </button>
      ))}
    </nav>
  );
}

ChoiceButtons.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      next: PropTypes.string.isRequired,
    }),
  ),
  onChoiceSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ChoiceButtons;
