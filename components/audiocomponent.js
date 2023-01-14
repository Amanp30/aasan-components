import React, { useState, useRef } from "react";

function audiocomponent({ src, autoplay = false }) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  function handlePlay() {
    setIsPlaying(true);
    audioRef.current.play();
  }

  function handlePause() {
    setIsPlaying(false);
    audioRef.current.pause();
  }

  function handleSeek(event) {
    if (audioRef.current) {
      const newTime = (event.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  }

  const [isMuted, setIsMuted] = useState(false);

  function handleMute() {
    if (audioRef.current) {
      if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      } else {
        setIsMuted(true);
        audioRef.current.muted = true;
      }
    }
  }

  const [volume, setVolume] = useState(1);

  function handleVolumeChange(event) {
    if (audioRef.current) {
      setVolume(event.target.value / 100);
      audioRef.current.volume = event.target.value / 100;
    }
  }

  return (
    <div className="audio_player">
      <audio
        ref={audioRef}
        src={src}
        autoPlay={autoplay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setIsPlaying(false)}
      />

      {isPlaying ? (
        <img
          src="/static/pause.svg"
          onClick={isPlaying ? handlePause : handlePlay}
          className="playpause"
        />
      ) : (
        <img
          src="/static/play.svg"
          onClick={isPlaying ? handlePause : handlePlay}
          className="playpause"
        />
      )}

      <input
        type="range"
        min={0}
        max={100}
        value={
          audioRef.current ? (currentTime / audioRef.current.duration) * 100 : 0
        }
        onChange={handleSeek}
        className="duration"
      />
      {isMuted ? (
        <img
          src="/static/sound-loud.svg"
          onClick={handleMute}
          className="muteun"
        />
      ) : (
        <img
          src="/static/sound-off.svg"
          onClick={handleMute}
          className="muteun"
        />
      )}
      {/* <label>
        Volume:
        <input
          type="range"
          min={0}
          max={100}
          value={volume * 100}
          onChange={handleVolumeChange}
        />
      </label> */}
    </div>
  );
}

export default audiocomponent;
