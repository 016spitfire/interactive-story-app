import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storiesProgress: {},
  userPreferences: {
    starredStories: [],
    completedStories: [],
    seriesProgress: {},
    storyCompletion: {}, // { storyId: { allVisitedNodes: [], discoveredEndings: [], playthroughCount: 0, lastUpdated: "" } }
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

      // Initialize or increment playthrough count in storyCompletion
      if (!state.userPreferences.storyCompletion[storyId]) {
        state.userPreferences.storyCompletion[storyId] = {
          allVisitedNodes: [startNode],
          discoveredEndings: [],
          playthroughCount: 1,
          lastUpdated: new Date().toISOString(),
        };
      } else {
        state.userPreferences.storyCompletion[storyId].playthroughCount += 1;
        state.userPreferences.storyCompletion[storyId].lastUpdated =
          new Date().toISOString();
        // Add start node to allVisitedNodes if not already there
        if (
          !state.userPreferences.storyCompletion[
            storyId
          ].allVisitedNodes.includes(startNode)
        ) {
          state.userPreferences.storyCompletion[storyId].allVisitedNodes.push(
            startNode,
          );
        }
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

      // Track in storyCompletion (persistent across playthroughs)
      if (storyId && state.userPreferences.storyCompletion[storyId]) {
        if (
          !state.userPreferences.storyCompletion[
            storyId
          ].allVisitedNodes.includes(nodeId)
        ) {
          state.userPreferences.storyCompletion[storyId].allVisitedNodes.push(
            nodeId,
          );
        }
        state.userPreferences.storyCompletion[storyId].lastUpdated =
          new Date().toISOString();
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
    discoverEnding: (state, action) => {
      const { storyId, endingNodeId } = action.payload;

      // Initialize storyCompletion if needed
      if (!state.userPreferences.storyCompletion[storyId]) {
        state.userPreferences.storyCompletion[storyId] = {
          allVisitedNodes: [],
          discoveredEndings: [],
          playthroughCount: 0,
          lastUpdated: new Date().toISOString(),
        };
      }

      // Add ending to discoveredEndings if not already there
      if (
        !state.userPreferences.storyCompletion[
          storyId
        ].discoveredEndings.includes(endingNodeId)
      ) {
        state.userPreferences.storyCompletion[storyId].discoveredEndings.push(
          endingNodeId,
        );
        state.userPreferences.storyCompletion[storyId].lastUpdated =
          new Date().toISOString();
      }
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
  discoverEnding,
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

// Story Completion Selectors (for stats tracking)
export const selectStoryCompletion = (storyId) => (state) => {
  return state.story.userPreferences?.storyCompletion?.[storyId] || null;
};

export const selectAllVisitedNodes = (storyId) => (state) => {
  const completion = selectStoryCompletion(storyId)(state);
  return completion?.allVisitedNodes || [];
};

export const selectDiscoveredEndings = (storyId) => (state) => {
  const completion = selectStoryCompletion(storyId)(state);
  return completion?.discoveredEndings || [];
};

export const selectPlaythroughCount = (storyId) => (state) => {
  const completion = selectStoryCompletion(storyId)(state);
  return completion?.playthroughCount || 0;
};

export const selectLastActivity = (storyId) => (state) => {
  const completion = selectStoryCompletion(storyId)(state);
  return completion?.lastUpdated || null;
};
