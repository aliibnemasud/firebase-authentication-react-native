import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import AudioPlayerController from "./AudioPlayerController";
import AudioPlayer from "./AudioPlayer";

const Player = () => {
  const [audioUri, setAudioUri] = useState("YOUR_AUDIO_URI_HERE");
  const [trackName, setTrackName] = useState("Track Name");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    // Implement your play/pause logic here
    setIsPlaying(!isPlaying);
  };

  const handleAudioSeek = (value) => {
    // Implement your audio seeking logic here
    // You might use this to update the currentPosition state and seek the audio
  };

  useEffect(() => {
    // Implement logic to fetch audio URI and track information here
    // You can use this useEffect to update the audioUri and trackName states
  }, []);

  return (
    <View>
      <AudioPlayer audioUri={require('../../assets/mp3/rigtone.mp3')} />
      <AudioPlayerController
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        trackName={trackName}
        currentPosition={currentPosition}
        duration={duration}
        onSeek={handleAudioSeek}
      />
    </View>
  );
};

export default Player;
