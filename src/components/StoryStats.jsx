import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  selectAllVisitedNodes,
  selectDiscoveredEndings,
  selectPlaythroughCount,
  selectLastActivity,
} from "../store/storySlice";
import { stories } from "../data/stories";
import "./StoryStats.css";

function StoryStats({ storyId }) {
  const navigate = useNavigate();

  // Get the story data
  const story = stories.find((s) => s.storyId === storyId);

  // Get completion stats from Redux
  const allVisitedNodes = useSelector((state) =>
    selectAllVisitedNodes(storyId)(state),
  );
  const discoveredEndings = useSelector((state) =>
    selectDiscoveredEndings(storyId)(state),
  );
  const playthroughCount = useSelector((state) =>
    selectPlaythroughCount(storyId)(state),
  );
  const lastActivity = useSelector((state) =>
    selectLastActivity(storyId)(state),
  );

  if (!story) {
    return (
      <div className="story-stats">
        <div className="stats-error">Story not found</div>
      </div>
    );
  }

  // Calculate stats
  const totalNodes = Object.keys(story.nodes).length;
  const totalEndings = Object.keys(story.nodes).filter(
    (nodeId) => story.nodes[nodeId].isEnding,
  ).length;

  const nodesVisited = allVisitedNodes.length;
  const endingsDiscovered = discoveredEndings.length;

  const nodesPercent =
    totalNodes > 0 ? Math.round((nodesVisited / totalNodes) * 100) : 0;
  const endingsPercent =
    totalEndings > 0 ? Math.round((endingsDiscovered / totalEndings) * 100) : 0;
  const overallCompletion =
    totalNodes > 0
      ? Math.round(
          ((nodesVisited + endingsDiscovered) / (totalNodes + totalEndings)) *
            100,
        )
      : 0;

  // Format last activity date
  const formatDate = (isoString) => {
    if (!isoString) return "Never";
    const date = new Date(isoString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get all ending nodes
  const endingNodes = Object.keys(story.nodes)
    .filter((nodeId) => story.nodes[nodeId].isEnding)
    .map((nodeId) => story.nodes[nodeId]);

  return (
    <div className="story-stats">
      <header className="stats-header">
        <button
          className="back-button"
          onClick={() => navigate("/")}
          aria-label="Back to story menu"
        >
          ← Back to Stories
        </button>
        <div className="stats-title-container">
          <h1 className="stats-title">{story.title}</h1>
          <p className="stats-subtitle">Completion Statistics</p>
        </div>
        <button
          className="read-story-button"
          onClick={() => navigate(`/story/${storyId}`)}
        >
          Read Story →
        </button>
      </header>

      <main className="stats-content">
        {/* Top Stats Grid - Desktop: side by side, Mobile: stacked */}
        <div className="top-stats-grid">
          {/* Overall Completion */}
          <section className="stats-section overall-section">
            <h2>Overall Completion</h2>
            <div className="completion-circle">
              <svg viewBox="0 0 100 100">
                <circle className="circle-bg" cx="50" cy="50" r="40" />
                <circle
                  className="circle-progress"
                  cx="50"
                  cy="50"
                  r="40"
                  style={{
                    strokeDasharray: `${overallCompletion * 2.51} 251`,
                  }}
                />
              </svg>
              <div className="completion-text">
                <span className="completion-percent">{overallCompletion}%</span>
                <span className="completion-label">Complete</span>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="stats-section quick-stats">
            <div className="stat-card">
              <div className="stat-value">{playthroughCount}</div>
              <div className="stat-label">Playthroughs</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{formatDate(lastActivity)}</div>
              <div className="stat-label">Last Played</div>
            </div>
          </section>
        </div>

        {/* Pages Visited */}
        <section className="stats-section">
          <h2>Pages Explored</h2>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${nodesPercent}%` }}
              />
            </div>
            <div className="progress-text">
              {nodesVisited} of {totalNodes} pages visited ({nodesPercent}%)
            </div>
          </div>
        </section>

        {/* Endings Discovered */}
        <section className="stats-section endings-section">
          <h2>Endings Discovered</h2>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div
                className="progress-fill endings-fill"
                style={{ width: `${endingsPercent}%` }}
              />
            </div>
            <div className="progress-text">
              {endingsDiscovered} of {totalEndings} endings found (
              {endingsPercent}%)
            </div>
          </div>

          <div className="endings-list">
            {endingNodes.map((ending) => {
              const isDiscovered = discoveredEndings.includes(ending.id);
              return (
                <div
                  key={ending.id}
                  className={`ending-item ${isDiscovered ? "discovered" : "undiscovered"}`}
                >
                  {isDiscovered ? (
                    <>
                      <span className="ending-icon">✓</span>
                      <span className="ending-title">{ending.endingTitle}</span>
                    </>
                  ) : (
                    <>
                      <span className="ending-icon">?</span>
                      <span className="ending-title">???</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

StoryStats.propTypes = {
  storyId: PropTypes.string.isRequired,
};

export default StoryStats;
