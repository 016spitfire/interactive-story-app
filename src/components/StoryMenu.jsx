import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import { selectFilteredAndSortedStories } from "../store/storyFilterSelectors";
import { selectIsStoryStarred, toggleStarStory } from "../store/storySlice";
import "./StoryMenu.css";

function StoryMenu({ stories }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "all",
    series: null,
    tags: [],
    starredOnly: false,
    completedOnly: false,
    sortBy: null,
  });

  // Get filtered and sorted stories
  const filteredStories = useSelector(selectFilteredAndSortedStories(filters));

  const handleSelectStory = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  const handleToggleStar = (e, storyId) => {
    e.stopPropagation(); // Prevent card click
    dispatch(toggleStarStory({ storyId }));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="story-menu-container">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onFilterChange={handleFilterChange}
        currentFilters={filters}
      />

      <div className="story-menu">
        <header className="menu-header">
          <button
            className="menu-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle filters"
          >
            ☰
          </button>
          <div>
            <h1 className="menu-title">Interactive Stories</h1>
            <p className="menu-subtitle">Choose your adventure</p>
          </div>
        </header>

        <div className="story-grid">
          {filteredStories.length === 0 ? (
            <div className="no-stories">
              <p>No stories match your filters.</p>
              <button
                onClick={() =>
                  handleFilterChange({
                    category: "all",
                    series: null,
                    tags: [],
                    starredOnly: false,
                    completedOnly: false,
                    sortBy: null,
                  })
                }
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredStories.map((story) => (
              <StoryCard
                key={story.storyId}
                story={story}
                onSelect={handleSelectStory}
                onToggleStar={handleToggleStar}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function StoryCard({ story, onSelect, onToggleStar }) {
  const isStarred = useSelector(selectIsStoryStarred(story.storyId));

  return (
    <div className="story-card-wrapper">
      <div
        className="story-card"
        onClick={() => onSelect(story.storyId)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(story.storyId);
          }
        }}
        aria-label={`Play ${story.title}`}
      >
        <div className="story-card-header">
          <h2 className="story-card-title">{story.title}</h2>
          <button
            className={`star-button ${isStarred ? "starred" : ""}`}
            onClick={(e) => onToggleStar(e, story.storyId)}
            aria-label={isStarred ? "Unstar story" : "Star story"}
          >
            {isStarred ? "★" : "☆"}
          </button>
        </div>
        <p className="story-card-author">by {story.author}</p>
        <p className="story-card-description">{story.description}</p>

        <div className="story-card-meta">
          {story.difficulty && (
            <span className={`difficulty-badge ${story.difficulty}`}>
              {story.difficulty}
            </span>
          )}
          {story.estimatedTime && (
            <span className="time-badge">{story.estimatedTime}</span>
          )}
        </div>

        {story.tags && story.tags.length > 0 && (
          <div className="story-card-tags">
            {story.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag-mini">
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="story-card-cta" aria-hidden="true">
          Begin Story →
        </span>
      </div>
    </div>
  );
}

StoryCard.propTypes = {
  story: PropTypes.shape({
    storyId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    difficulty: PropTypes.string,
    estimatedTime: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  onToggleStar: PropTypes.func.isRequired,
};

StoryMenu.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      storyId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StoryMenu;
