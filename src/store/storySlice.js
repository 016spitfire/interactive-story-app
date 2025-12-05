import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStoryId: null,
  storiesProgress: {},
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

      // IMPORTANT: Always set currentStoryId AFTER ensuring progress exists
      // This prevents selectors from reading the wrong story's data
      state.currentStoryId = storyId;
    },
    navigateToNode: (state, action) => {
      const nodeId = action.payload;
      const storyId = state.currentStoryId;

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
      state.currentStoryId = storyId;
      state.storiesProgress[storyId] = {
        currentNodeId: startNode,
        visitedNodes: [startNode],
        startTime: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      };
    },
    loadSavedProgress: (state, action) => {
      const savedState = action.payload;

      // Handle migration from old state structure
      if (
        savedState.currentNodeId &&
        savedState.visitedNodes &&
        savedState.currentStoryId
      ) {
        // Old structure detected - migrate it
        return {
          currentStoryId: savedState.currentStoryId,
          storiesProgress: {
            [savedState.currentStoryId]: {
              currentNodeId: savedState.currentNodeId,
              visitedNodes: savedState.visitedNodes,
              startTime: savedState.startTime || new Date().toISOString(),
              lastUpdated: savedState.lastUpdated || new Date().toISOString(),
            },
          },
        };
      }

      // New structure - use as-is, but ensure storiesProgress exists
      return {
        currentStoryId: savedState.currentStoryId || null,
        storiesProgress: savedState.storiesProgress || {},
      };
    },
    clearProgress: () => {
      return initialState;
    },
    clearStoryProgress: (state, action) => {
      const storyId = action.payload;
      if (state.storiesProgress[storyId]) {
        delete state.storiesProgress[storyId];
      }
      if (state.currentStoryId === storyId) {
        state.currentStoryId = null;
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
  clearStoryProgress,
} = storySlice.actions;

export default storySlice.reducer;

// Selectors
export const selectCurrentStoryId = (state) => state.story.currentStoryId;
export const selectCurrentStoryProgress = (state) => {
  const storyId = state.story.currentStoryId;
  if (!storyId || !state.story.storiesProgress) return null;
  return state.story.storiesProgress[storyId] || null;
};
export const selectStoryProgress = (storyId) => (state) => {
  if (!state.story.storiesProgress) return null;
  return state.story.storiesProgress[storyId] || null;
};
export const selectCurrentNodeId = (state) => {
  const progress = selectCurrentStoryProgress(state);
  return progress ? progress.currentNodeId : null;
};
export const selectVisitedNodes = (state) => {
  const progress = selectCurrentStoryProgress(state);
  return progress ? progress.visitedNodes : [];
};
export const selectStartTime = (state) => {
  const progress = selectCurrentStoryProgress(state);
  return progress ? progress.startTime : null;
};
export const selectLastUpdated = (state) => {
  const progress = selectCurrentStoryProgress(state);
  return progress ? progress.lastUpdated : null;
};
