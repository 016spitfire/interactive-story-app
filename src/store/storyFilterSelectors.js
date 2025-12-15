import { stories } from "../data/stories";
import { SERIES_INFO } from "../data/seriesInfo";

// Filter stories by category
export const selectStoriesByCategory = (category) => (state) => {
  if (!category || category === "all") {
    return stories;
  }
  return stories.filter((story) => story.category === category);
};

// Filter stories by series
export const selectStoriesBySeries = (seriesId) => (state) => {
  if (!seriesId) {
    return stories;
  }
  return stories
    .filter((story) => story.series === seriesId)
    .sort((a, b) => {
      // Sort by series order if defined
      if (a.seriesOrder !== undefined && b.seriesOrder !== undefined) {
        return a.seriesOrder - b.seriesOrder;
      }
      return 0;
    });
};

// Filter stories by tags (stories must have ALL provided tags)
export const selectStoriesByTags = (tags) => (state) => {
  if (!tags || tags.length === 0) {
    return stories;
  }
  return stories.filter((story) => {
    return tags.every((tag) => story.tags.includes(tag));
  });
};

// Filter starred stories
export const selectStarredStoriesData = (state) => {
  const starredIds = state.story.userPreferences?.starredStories || [];
  return stories.filter((story) => starredIds.includes(story.storyId));
};

// Filter completed stories
export const selectCompletedStoriesData = (state) => {
  const completedIds = state.story.userPreferences?.completedStories || [];
  return stories.filter((story) => completedIds.includes(story.storyId));
};

// Get all unique categories from stories
export const selectAllCategories = () => {
  const categories = new Set(stories.map((story) => story.category));
  return Array.from(categories).filter(Boolean);
};

// Get all series with metadata
export const selectAllSeries = () => {
  const seriesIds = new Set(
    stories.map((story) => story.series).filter(Boolean)
  );
  return Array.from(seriesIds).map((seriesId) => ({
    ...SERIES_INFO[seriesId],
    storiesInSeries: stories.filter((s) => s.series === seriesId),
  }));
};

// Calculate series completion for a specific series
export const selectSeriesCompletion = (seriesId) => (state) => {
  const completedIds = state.story.userPreferences?.completedStories || [];
  const seriesStories = stories.filter((story) => story.series === seriesId);

  const completed = seriesStories.filter((story) =>
    completedIds.includes(story.storyId)
  ).length;

  return {
    completed,
    total: seriesStories.length,
    percentage: seriesStories.length > 0 ? (completed / seriesStories.length) * 100 : 0,
  };
};

// Sort stories by various criteria
export const selectSortedStories = (stories, sortBy) => {
  switch (sortBy) {
    case "title":
      return [...stories].sort((a, b) => a.title.localeCompare(b.title));

    case "difficulty":
      const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
      return [...stories].sort((a, b) => {
        const aVal = difficultyOrder[a.difficulty] || 999;
        const bVal = difficultyOrder[b.difficulty] || 999;
        return aVal - bVal;
      });

    case "seriesOrder":
      return [...stories].sort((a, b) => {
        // First group by series
        if (a.series !== b.series) {
          return (a.series || "zzz").localeCompare(b.series || "zzz");
        }
        // Then sort by series order within each series
        if (a.seriesOrder !== undefined && b.seriesOrder !== undefined) {
          return a.seriesOrder - b.seriesOrder;
        }
        return 0;
      });

    case "newest":
      // For now, stories are in order they were added
      // Could add a 'createdDate' field to stories later
      return stories;

    default:
      return stories;
  }
};

// Combined filter: Apply multiple filters and sort
export const selectFilteredAndSortedStories = (filters) => (state) => {
  let filtered = stories;

  // Apply category filter
  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter((story) => story.category === filters.category);
  }

  // Apply series filter
  if (filters.series) {
    filtered = filtered.filter((story) => story.series === filters.series);
  }

  // Apply tags filter (must have all tags)
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((story) =>
      filters.tags.every((tag) => story.tags.includes(tag))
    );
  }

  // Apply starred filter
  if (filters.starredOnly) {
    const starredIds = state.story.userPreferences?.starredStories || [];
    filtered = filtered.filter((story) => starredIds.includes(story.storyId));
  }

  // Apply completed filter
  if (filters.completedOnly) {
    const completedIds = state.story.userPreferences?.completedStories || [];
    filtered = filtered.filter((story) => completedIds.includes(story.storyId));
  }

  // Apply sort
  if (filters.sortBy) {
    filtered = selectSortedStories(filtered, filters.sortBy);
  }

  return filtered;
};
