import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoryContainer from "./components/StoryContainer";
import StoryMenu from "./components/StoryMenu";
import ErrorBoundary from "./components/ErrorBoundary";
import {
  selectStory,
  clearProgress,
  selectCurrentStoryId,
} from "./store/storySlice";
import { stories } from "./data/stories";
import { validateStories } from "./utils/storyValidation";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const currentStoryId = useSelector(selectCurrentStoryId);

  // Development-only: Validate all stories on mount
  useEffect(() => {
    if (import.meta.env.DEV) {
      const result = validateStories(stories);
      if (!result.isValid) {
        console.error("❌ Story validation failed:", result);
      } else {
        console.log("✅ All stories validated successfully:", result);
      }
    }
  }, []);

  const handleSelectStory = (story) => {
    dispatch(selectStory(story.storyId));
  };

  const handleBackToMenu = () => {
    // Just clear the current story selection, keep all progress saved
    dispatch(selectStory(null));
  };

  const handleErrorReset = () => {
    // On error, clear everything and reset
    dispatch(clearProgress());
  };

  return (
    <ErrorBoundary onReset={handleErrorReset}>
      <div className="app">
        {!currentStoryId ? (
          <StoryMenu stories={stories} onSelectStory={handleSelectStory} />
        ) : (
          <StoryContainer onBackToMenu={handleBackToMenu} />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
