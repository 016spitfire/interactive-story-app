import PropTypes from 'prop-types';
import './StoryMenu.css';

function StoryMenu({ stories, onSelectStory }) {
  return (
    <div className="story-menu">
      <header className="menu-header">
        <h1 className="menu-title">Interactive Stories</h1>
        <p className="menu-subtitle">Choose your adventure</p>
      </header>

      <div className="story-grid">
        {stories.map((story) => (
          <button
            key={story.storyId}
            className="story-card"
            onClick={() => onSelectStory(story)}
            aria-label={`Play ${story.title}`}
          >
            <h2 className="story-card-title">{story.title}</h2>
            <p className="story-card-author">by {story.author}</p>
            <p className="story-card-description">{story.description}</p>
            <span className="story-card-cta" aria-hidden="true">
              Begin Story →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

StoryMenu.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      storyId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectStory: PropTypes.func.isRequired,
};

export default StoryMenu;
