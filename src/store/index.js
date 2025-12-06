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
// Note: This runs on EVERY Redux state change. For this app, state only changes
// when users make choices (human-speed interactions), so no debouncing is needed.
// If we add features with rapid state updates (typing, animations, real-time data),
// consider debouncing this to avoid excessive localStorage writes.
store.subscribe(() => {
  const state = store.getState();
  saveProgress(state.story);
});
