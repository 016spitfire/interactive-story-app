import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storiesProgress: {},
  userPreferences: {
    starredStories: [],
    completedStories: [],
    seriesProgress: {},
  },
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    startStory: (state, action) => {
      const { storyId, startNode } = action.payload;

      // Initialize progress for this story if it doesn't exist
      if (!state.storiesProgress) {
        state.storiesProgress = {};
      }

      if (!state.storiesProgress[storyId]) {
        state.storiesProgress[storyId] = {
          currentNodeId: startNode,
          visitedNodes: [startNode],
          startTime: new Date().toISOString(),
          lastUpdated: new Date().toISOString(),
        };
      }
    },
    navigateToNode: (state, action) => {
      const { storyId, nodeId } = action.payload;

      if (storyId && state.storiesProgress[storyId]) {
        state.storiesProgress[storyId].currentNodeId = nodeId;
        if (!state.storiesProgress[storyId].visitedNodes.includes(nodeId)) {
          state.storiesProgress[storyId].visitedNodes.push(nodeId);
        }
        state.storiesProgress[storyId].lastUpdated = new Date().toISOString();
      }
    },
    restartStory: (state, action) => {
      const { storyId, startNode } = action.payload;
      if (!state.storiesProgress) {
        state.storiesProgress = {};
      }
      state.storiesProgress[storyId] = {
        currentNodeId: startNode,
        visitedNodes: [startNode],
        startTime: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      };
    },
    loadSavedProgress: (state, action) => {
      const savedState = action.payload;

      // Use saved state, ensure both storiesProgress and userPreferences exist
      return {
        storiesProgress: savedState.storiesProgress || {},
        userPreferences:
          savedState.userPreferences || initialState.userPreferences,
      };
    },
    clearProgress: () => {
      return initialState;
    },
    toggleStarStory: (state, action) => {
      const { storyId } = action.payload;
      const index = state.userPreferences.starredStories.indexOf(storyId);

      if (index > -1) {
        // Remove from starred
        state.userPreferences.starredStories.splice(index, 1);
      } else {
        // Add to starred
        state.userPreferences.starredStories.push(storyId);
      }
    },
    markStoryCompleted: (state, action) => {
      const { storyId } = action.payload;

      if (!state.userPreferences.completedStories.includes(storyId)) {
        state.userPreferences.completedStories.push(storyId);
      }
    },
    updateSeriesProgress: (state, action) => {
      const { seriesId, completed, total } = action.payload;

      state.userPreferences.seriesProgress[seriesId] = {
        completed,
        total,
      };
    },
  },
});

export const {
  startStory,
  navigateToNode,
  restartStory,
  loadSavedProgress,
  clearProgress,
  toggleStarStory,
  markStoryCompleted,
  updateSeriesProgress,
} = storySlice.actions;

export default storySlice.reducer;

// Selectors
// These selectors now take storyId as a parameter since we use React Router for navigation
export const selectStoryProgress = (storyId) => (state) => {
  if (!state.story.storiesProgress) return null;
  return state.story.storiesProgress[storyId] || null;
};

export const selectCurrentNodeId = (storyId) => (state) => {
  const progress = selectStoryProgress(storyId)(state);
  return progress ? progress.currentNodeId : null;
};

export const selectVisitedNodes = (storyId) => (state) => {
  const progress = selectStoryProgress(storyId)(state);
  return progress ? progress.visitedNodes : [];
};

// User Preferences Selectors
export const selectStarredStories = (state) => {
  return state.story.userPreferences?.starredStories || [];
};

export const selectCompletedStories = (state) => {
  return state.story.userPreferences?.completedStories || [];
};

export const selectSeriesProgress = (seriesId) => (state) => {
  return state.story.userPreferences?.seriesProgress?.[seriesId] || null;
};

export const selectIsStoryStarred = (storyId) => (state) => {
  const starred = selectStarredStories(state);
  return starred.includes(storyId);
};

export const selectIsStoryCompleted = (storyId) => (state) => {
  const completed = selectCompletedStories(state);
  return completed.includes(storyId);
};
