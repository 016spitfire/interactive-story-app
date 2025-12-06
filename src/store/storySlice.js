import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
      state.currentStoryId = storyId;
    },
    selectStory: (state, action) => {
      const storyId = action.payload;
      state.currentStoryId = storyId;
    },
    loadSavedProgress: (state, action) => {
      const savedState = action.payload;

      // Use saved state, ensure storiesProgress exists
      return {
        currentStoryId: null, // Always start at menu on page load
        storiesProgress: savedState.storiesProgress || {},
      };
    },
    clearProgress: () => {
      return initialState;
    },
  },
});

export const {
  startStory,
  navigateToNode,
  restartStory,
  selectStory,
  loadSavedProgress,
  clearProgress,
} = storySlice.actions;

export default storySlice.reducer;

// Selectors
export const selectCurrentStoryId = (state) => state.story.currentStoryId;
export const selectCurrentStoryProgress = (state) => {
  const storyId = state.story.currentStoryId;
  if (!storyId || !state.story.storiesProgress) return null;
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
