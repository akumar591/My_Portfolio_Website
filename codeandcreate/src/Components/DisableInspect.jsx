import React, { useEffect } from "react";

function DisableInspect({ children }) {

  useEffect(() => {

    // Disable right click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {

      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Ctrl + U, S, I
      if (
        e.ctrlKey &&
        ["u", "U", "s", "S", "i", "I"].includes(e.key)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, []);

  return children;
}

export default DisableInspect;