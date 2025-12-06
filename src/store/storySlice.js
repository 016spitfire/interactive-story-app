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

      // Use saved state, ensure storiesProgress exists
      return {
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
  loadSavedProgress,
  clearProgress,
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
