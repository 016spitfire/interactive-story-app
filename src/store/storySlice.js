import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStoryId: null,
  currentNodeId: null,
  visitedNodes: [],
  startTime: null,
  lastUpdated: null,
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    startStory: (state, action) => {
      const { storyId, startNode } = action.payload;
      state.currentStoryId = storyId;
      state.currentNodeId = startNode;
      state.visitedNodes = [startNode];
      state.startTime = new Date().toISOString();
      state.lastUpdated = new Date().toISOString();
    },
    navigateToNode: (state, action) => {
      const nodeId = action.payload;
      state.currentNodeId = nodeId;
      if (!state.visitedNodes.includes(nodeId)) {
        state.visitedNodes.push(nodeId);
      }
      state.lastUpdated = new Date().toISOString();
    },
    restartStory: (state, action) => {
      const { storyId, startNode } = action.payload;
      state.currentStoryId = storyId;
      state.currentNodeId = startNode;
      state.visitedNodes = [startNode];
      state.startTime = new Date().toISOString();
      state.lastUpdated = new Date().toISOString();
    },
    loadSavedProgress: (state, action) => {
      return { ...state, ...action.payload };
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
export const selectCurrentNodeId = (state) => state.story.currentNodeId;
export const selectVisitedNodes = (state) => state.story.visitedNodes;
export const selectCurrentStoryId = (state) => state.story.currentStoryId;
export const selectStartTime = (state) => state.story.startTime;
export const selectLastUpdated = (state) => state.story.lastUpdated;
