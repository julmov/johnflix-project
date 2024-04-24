import React from "react";
import { useEffect } from "react";
import "../css/JohnFlix.css"; // Import your CSS file for background styles

function BackgroundImage({ imageUrl, children }) {
  useEffect(() => {
    // Set margin and padding to 0 for the body element when the component mounts
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // Clean up the styles when the component unmounts
    return () => {
      document.body.style.margin = "";
      document.body.style.padding = "";
    };
  }, []);

  return (
    <div className="background-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {children}
    </div>
  );
}

export default BackgroundImage;
