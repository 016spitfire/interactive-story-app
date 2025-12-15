import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  selectAllSeries,
  selectSeriesCompletion,
} from "../store/storyFilterSelectors";
import { CATEGORIES, AVAILABLE_TAGS } from "../data/tags";
import { stories } from "../data/stories";
import "./Sidebar.css";

function Sidebar({ isOpen, onClose, onFilterChange, currentFilters }) {
  const [selectedTags, setSelectedTags] = useState(currentFilters.tags || []);
  const allSeries = selectAllSeries();

  // Filter categories to only show those with stories
  const availableCategories = useMemo(() => {
    const categoriesWithStories = new Set(
      stories.map((story) => story.category),
    );
    return CATEGORIES.filter(
      (cat) => cat.id === "all" || categoriesWithStories.has(cat.id),
    );
  }, []);

  // Filter tags to only show those used in stories
  const availableTags = useMemo(() => {
    const tagsInUse = new Set();
    stories.forEach((story) => {
      if (story.tags) {
        story.tags.forEach((tag) => tagsInUse.add(tag));
      }
    });
    return AVAILABLE_TAGS.filter((tag) => tagsInUse.has(tag));
  }, []);

  const handleCategoryClick = (categoryId) => {
    onFilterChange({ ...currentFilters, category: categoryId });
  };

  const handleSeriesClick = (seriesId) => {
    onFilterChange({ ...currentFilters, series: seriesId, category: null });
  };

  const handleStarredClick = () => {
    onFilterChange({
      ...currentFilters,
      starredOnly: !currentFilters.starredOnly,
    });
  };

  const handleTagToggle = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newTags);
    onFilterChange({ ...currentFilters, tags: newTags });
  };

  const handleSortChange = (sortBy) => {
    onFilterChange({ ...currentFilters, sortBy });
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
    onFilterChange({
      category: "all",
      series: null,
      tags: [],
      starredOnly: false,
      completedOnly: false,
      sortBy: null,
    });
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Filters & Navigation</h2>
          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <div className="sidebar-content">
          {/* Categories Section */}
          <section className="sidebar-section">
            <h3>📚 Categories</h3>
            <ul className="sidebar-list">
              {availableCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`sidebar-button ${
                      currentFilters.category === cat.id ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Series Section */}
          <section className="sidebar-section">
            <h3>📖 Series</h3>
            <ul className="sidebar-list">
              {allSeries.map((series) => (
                <SeriesItem
                  key={series.id}
                  series={series}
                  isActive={currentFilters.series === series.id}
                  onClick={() => handleSeriesClick(series.id)}
                />
              ))}
            </ul>
          </section>

          {/* Favorites Section */}
          <section className="sidebar-section">
            <h3>⭐ Favorites</h3>
            <button
              className={`sidebar-button ${
                currentFilters.starredOnly ? "active" : ""
              }`}
              onClick={handleStarredClick}
            >
              Show Starred Stories
            </button>
          </section>

          {/* Tags Section */}
          <section className="sidebar-section">
            <h3>🏷️ Filter by Tags</h3>
            <div className="tag-list">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  className={`tag-button ${
                    selectedTags.includes(tag) ? "active" : ""
                  }`}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          {/* Sort Section */}
          <section className="sidebar-section">
            <h3>📊 Sort By</h3>
            <ul className="sidebar-list">
              <li>
                <button
                  className={`sidebar-button ${
                    currentFilters.sortBy === "title" ? "active" : ""
                  }`}
                  onClick={() => handleSortChange("title")}
                >
                  Title
                </button>
              </li>
              <li>
                <button
                  className={`sidebar-button ${
                    currentFilters.sortBy === "difficulty" ? "active" : ""
                  }`}
                  onClick={() => handleSortChange("difficulty")}
                >
                  Difficulty
                </button>
              </li>
              <li>
                <button
                  className={`sidebar-button ${
                    currentFilters.sortBy === "seriesOrder" ? "active" : ""
                  }`}
                  onClick={() => handleSortChange("seriesOrder")}
                >
                  Series Order
                </button>
              </li>
            </ul>
          </section>

          {/* Clear Filters */}
          <section className="sidebar-section">
            <button
              className="clear-filters-button"
              onClick={handleClearFilters}
            >
              Clear All Filters
            </button>
          </section>
        </div>
      </aside>
    </>
  );
}

function SeriesItem({ series, isActive, onClick }) {
  const completion = useSelector(selectSeriesCompletion(series.id));

  return (
    <li>
      <button
        className={`sidebar-button series-button ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="series-info">
          <span className="series-name">{series.name}</span>
          <span className="series-progress">
            {completion.completed}/{completion.total} complete
          </span>
        </div>
      </button>
    </li>
  );
}

SeriesItem.propTypes = {
  series: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  currentFilters: PropTypes.shape({
    category: PropTypes.string,
    series: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    starredOnly: PropTypes.bool,
    completedOnly: PropTypes.bool,
    sortBy: PropTypes.string,
  }).isRequired,
};

export default Sidebar;
