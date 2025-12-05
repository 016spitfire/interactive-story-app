import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./storySlice";
import { saveProgress, loadProgress } from "../utils/localStorage";

// Load persisted state
const persistedState = loadProgress();

export const store = configureStore({
  reducer: {
    story: storyReducer,
  },
  preloadedState: persistedState ? { story: persistedState } : undefined,
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  const state = store.getState();
  saveProgress(state.story);
});
