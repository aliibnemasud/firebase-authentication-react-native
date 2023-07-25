/* import * as React from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const PlayMusic = () => {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);

  async function playSound() {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/mp3/rigtone.mp3')
      );
      setSound(sound);
      setIsPlaying(true);

      console.log('Playing Sound');
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound', error);
    }
  }

  async function pauseSound() {
    if (sound) {
      console.log('Pausing Sound');
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function stopSound() {
    if (sound) {
      console.log('Stopping Sound');
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      {isPlaying ? (
        <Button title="Pause Sound" onPress={pauseSound} />
      ) : (
        <Button title="Play Sound" onPress={playSound} />
      )}
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
};

export default PlayMusic;
 */

// v2

/* import * as React from 'react';
import { View, Button, Slider, Text } from 'react-native';
import { Audio } from 'expo-av';

const PlayMusic = () => {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  async function playSound() {
    try {
      console.log('Loading Sound');
      const { sound, status } = await Audio.Sound.createAsync(
        require('../../assets/mp3/rigtone.mp3'),
        { shouldPlay: true }
      );
      setSound(sound);
      setIsPlaying(true);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setDuration(status.durationMillis);
          setPosition(status.positionMillis);
        }
      });
    } catch (error) {
      console.error('Error playing sound', error);
    }
  }

  async function pauseSound() {
    if (sound) {
      console.log('Pausing Sound');
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function stopSound() {
    if (sound) {
      console.log('Stopping Sound');
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }

  async function onSeek(value) {
    if (sound) {
      console.log('Seeking Sound');
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{position.toFixed(2)}</Text>
        <Text>{(duration - position).toFixed(2)}</Text>
      </View>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={onSeek}
        thumbTintColor="#000"
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#888"
      />
      {isPlaying ? (
        <Button title="Pause Sound" onPress={pauseSound} />
      ) : (
        <Button title="Play Sound" onPress={playSound} />
      )}
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
};

export default PlayMusic;
 */

import * as React from 'react';
import { View, Button, Slider, Text } from 'react-native';
import { Audio } from 'expo-av';

const PlayMusic = () => {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [position, setPosition] = React.useState(0);

  async function playSound() {
    try {
      if (sound) {
        console.log('Resuming Sound');
        await sound.playAsync();
      } else {
        console.log('Loading Sound');
        const { sound, status } = await Audio.Sound.createAsync(
          require('../../assets/mp3/rigtone.mp3'),
          { shouldPlay: true, positionMillis: position }
        );
        setSound(sound);
        setIsPlaying(true);

        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded) {
            setDuration(status.durationMillis);
            setPosition(status.positionMillis);
          }
        });
      }
    } catch (error) {
      console.error('Error playing sound', error);
    }
  }

  async function pauseSound() {
    if (sound) {
      console.log('Pausing Sound');
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  async function stopSound() {
    if (sound) {
      console.log('Stopping Sound');
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }

  async function onSeek(value) {
    if (sound) {
      console.log('Seeking Sound');
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{position.toFixed(2)}</Text>
        <Text>{(duration - position).toFixed(2)}</Text>
      </View>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={onSeek}
        thumbTintColor="#000"
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#888"
      />
      {isPlaying ? (
        <Button title="Pause Sound" onPress={pauseSound} />
      ) : (
        <Button title="Play Sound" onPress={playSound} />
      )}
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
};

export default PlayMusic;
