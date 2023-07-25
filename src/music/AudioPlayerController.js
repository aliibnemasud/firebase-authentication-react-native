import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from 'react-native-slider';

const AudioPlayerController = ({ isPlaying, onPlayPause, trackName, currentPosition, duration, onSeek }) => {
  return (
    <View style={styles.container}>
      <Text>{trackName}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={currentPosition}
        onValueChange={onSeek}
      />
      <Text>{currentPosition.toFixed(2)}</Text>
      <Text>{duration.toFixed(2)}</Text>
      <TouchableOpacity onPress={onPlayPause}>
        <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: 200,
  },
});

export default AudioPlayerController;