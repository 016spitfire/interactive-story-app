import StoryContainer from "./components/StoryContainer";
import { sampleStory } from "./data/stories";
import "./App.css";

function App() {
  return (
    <div className="app">
      <StoryContainer story={sampleStory} />
    </div>
  );
}

export default App;
