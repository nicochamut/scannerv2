import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FullScreenStyled = styled.button`
  position: relative;
  top: 2rem;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const FullScreenButton = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleFullScreen = () => {
    const doc = window.document;
    const docEl = doc.documentElement;

    if (!isFullScreen) {
      const requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;

      if (requestFullScreen) {
        requestFullScreen.call(docEl);
        setIsFullScreen(true);
      }
    } else {
      const cancelFullScreen =
        doc.exitFullscreen ||
        doc.mozCancelFullScreen ||
        doc.webkitExitFullscreen ||
        doc.msExitFullscreen;

      if (cancelFullScreen) {
        cancelFullScreen.call(doc);
        setIsFullScreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
    document.addEventListener("msfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullScreenChange
      );
    };
  }, []);

  useEffect(() => {
    setIsVisible(!isFullScreen);
  }, [isFullScreen]);

  return (
    <FullScreenStyled onClick={toggleFullScreen} isVisible={isVisible}>
      {isFullScreen ? "Exit FullScreen" : "FullScreen"}
    </FullScreenStyled>
  );
};

export default FullScreenButton;
