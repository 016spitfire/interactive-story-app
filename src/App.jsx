import { useState } from "react";
import { useDispatch } from "react-redux";
import StoryContainer from "./components/StoryContainer";
import StoryMenu from "./components/StoryMenu";
import ErrorBoundary from "./components/ErrorBoundary";
import { clearProgress } from "./store/storySlice";
import { stories } from "./data/stories";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [selectedStory, setSelectedStory] = useState(null);

  const handleSelectStory = (story) => {
    setSelectedStory(story);
  };

  const handleBackToMenu = () => {
    dispatch(clearProgress());
    setSelectedStory(null);
  };

  const handleErrorReset = () => {
    dispatch(clearProgress());
    setSelectedStory(null);
  };

  return (
    <ErrorBoundary onReset={handleErrorReset}>
      <div className="app">
        {!selectedStory ? (
          <StoryMenu stories={stories} onSelectStory={handleSelectStory} />
        ) : (
          <StoryContainer
            story={selectedStory}
            onBackToMenu={handleBackToMenu}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
