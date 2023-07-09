import React,{useState} from 'react';
import "../project.css";

const Projects= ({src}) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFrameClick = () => {
    setIsFullScreen((prevFullScreen) => !prevFullScreen);
  };
  return (
    <div className={`mac-window ${isFullScreen ? 'fullscreen' : ''}`}>
      <div className="mac-window-header">
        <div className="mac-window-controls">
          <div className="mac-window-control mac-window-control-red" onClick={handleFrameClick}></div>
          <div className="mac-window-control mac-window-control-yellow"onClick={handleFrameClick} ></div>
          <div className="mac-window-control mac-window-control-green"onClick={handleFrameClick} ></div>
        </div>
      </div>
      <div className="mac-window-content">
        <iframe src={src} title="Mac Window" onClick={handleFrameClick} sandbox></iframe>
      </div>
    </div>
  );
};

export default Projects;
