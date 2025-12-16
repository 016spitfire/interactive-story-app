import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import StoryContainer from "./components/StoryContainer";
import StoryMenu from "./components/StoryMenu";
import StoryStats from "./components/StoryStats";
import ErrorBoundary from "./components/ErrorBoundary";
import InstallPrompt from "./components/InstallPrompt";
import { clearProgress } from "./store/storySlice";
import { stories } from "./data/stories";
import { validateStories } from "./utils/storyValidation";
import "./App.css";

function App() {
  const dispatch = useDispatch();

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

  const handleErrorReset = () => {
    // On error, clear everything and reset
    dispatch(clearProgress());
  };

  return (
    <ErrorBoundary onReset={handleErrorReset}>
      <div className="app">
        <Routes>
          <Route path="/" element={<StoryMenu stories={stories} />} />
          <Route path="/story/:storyId" element={<StoryRoute />} />
          <Route path="/story/:storyId/stats" element={<StatsRoute />} />
        </Routes>
        <InstallPrompt />
      </div>
    </ErrorBoundary>
  );
}

// Separate component to handle story routing
function StoryRoute() {
  const { storyId } = useParams();
  const navigate = useNavigate();

  const handleBackToMenu = () => {
    navigate("/");
  };

  return <StoryContainer storyId={storyId} onBackToMenu={handleBackToMenu} />;
}

// Separate component to handle stats routing
function StatsRoute() {
  const { storyId } = useParams();

  return <StoryStats storyId={storyId} />;
}

export default App;
