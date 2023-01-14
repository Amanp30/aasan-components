import React, { useState, useRef } from "react";

const CustomAudioPlayer = ({ src, autoplay = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleSeek = (event) => {
    if (audioRef.current) {
      const newTime = (event.target.value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (event) => {
    if (audioRef.current) {
      setVolume(event.target.value / 100);
      audioRef.current.volume = event.target.value / 100;
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        setIsMuted(false);
        audioRef.current.volume = volume;
      } else {
        setIsMuted(true);
        audioRef.current.volume = 0;
      }
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={src}
        autoPlay={autoplay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setIsPlaying(false)}
      />
      <div>
        <button onClick={isPlaying ? handlePause : handlePlay}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        <label>
          Volume:
          <input
            type="range"
            min={0}
            max={100}
            value={volume * 100}
            onChange={handleVolumeChange}
          />
        </label>
        <label>
          Seek:
          <input
            type="range"
            min={0}
            max={100}
            value={(currentTime / audioRef.current.duration || 0) * 100}
            onChange={handleSeek}
          />
        </label>
        <div>
          {Math.floor(currentTime / 60)}: {Math.floor(currentTime % 60)} /{" "}
          {Math.floor(audioRef.current.duration / 60)}:
          {Math.floor(audioRef.current.duration % 60)}
        </div>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
