import { useState } from "react";
import { useDispatch } from "react-redux";
import StoryContainer from "./components/StoryContainer";
import StoryMenu from "./components/StoryMenu";
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

  return (
    <div className="app">
      {!selectedStory ? (
        <StoryMenu stories={stories} onSelectStory={handleSelectStory} />
      ) : (
        <StoryContainer story={selectedStory} onBackToMenu={handleBackToMenu} />
      )}
    </div>
  );
}

export default App;
