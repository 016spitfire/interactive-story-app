import { useState, useEffect } from "react";
import "./InstallPrompt.css";

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the default mini-infobar
      e.preventDefault();
      // Save the event so we can trigger it later
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if already installed (standalone mode or iOS standalone)
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone
    ) {
      setIsInstalled(true);
    }

    // Check if dismissed this session
    const dismissed = sessionStorage.getItem("installPromptDismissed");
    if (dismissed) {
      setIsDismissed(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback: show instruction if prompt not available
      alert(
        "To install:\n\nChrome/Edge: Click the ⊕ icon in the address bar\niOS Safari: Tap Share → Add to Home Screen\nAndroid Chrome: Tap Menu → Add to Home screen",
      );
      return;
    }

    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }

    // Clear the prompt
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("installPromptDismissed", "true");
  };

  // Don't show if already installed or dismissed
  if (isInstalled || isDismissed) {
    return null;
  }

  return (
    <div className="install-prompt">
      <div className="install-prompt-content">
        <div className="install-prompt-icon">📱</div>
        <div className="install-prompt-text">
          <strong>Install Interactive Stories</strong>
          <span>Access offline and add to your home screen</span>
        </div>
        <div className="install-prompt-actions">
          <button
            className="install-prompt-btn install-prompt-btn-primary"
            onClick={handleInstallClick}
          >
            Install
          </button>
          <button
            className="install-prompt-btn install-prompt-btn-dismiss"
            onClick={handleDismiss}
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstallPrompt;
