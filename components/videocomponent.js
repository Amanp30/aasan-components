import React, { useRef, useState, useEffect } from "react";

const CustomVideo = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const [max, setMax] = useState(0);

  const handlePlay = () => {
    videoRef.current.play();
    setisPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setisPlaying(false);
  };

  const handleSeek = (e) => {
    videoRef.current.currentTime = e.target.value;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedData = () => {
    if (videoRef.current) {
      setMax(videoRef.current.duration);
    }
  };

  useEffect(() => {
    handleLoadedData();
    handleTimeUpdate();
  }, []);

  /*  const handleFullscreen = () => {
    alert(5);
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      // Firefox
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  }; */

  return (
    <div className="aasan_video">
      <video
        poster={poster}
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="controls">
        {isPlaying ? (
          <img src="/static/pause.svg" onClick={handlePause} />
        ) : (
          <img src="/static/play.svg" onClick={handlePlay} />
        )}

        <input
          type="range"
          min="0"
          max={max}
          onChange={handleSeek}
          value={currentTime}
        />
      </div>
    </div>
  );
};

export default CustomVideo;
