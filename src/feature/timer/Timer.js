import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown, RoundedButton } from '../../components';
import { Timing } from '../Timing';
import { spacing, colors } from '../../utils';

const SECONDS_TO_MS = 1000;
const PATTERN = Array(3).fill(SECONDS_TO_MS);

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsSttarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = ({ reset }) => {
    Vibration.vibrate(PATTERN);
    setIsSttarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          onProgress={setProgress}
          onEnd={onEnd}
          isPaused={!isStarted}
          minutes={minutes}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar
          color={colors.progressBar}
          style={styles.progressBar}
          progress={progress}
        />
      </View>
      <View style={styles.timmingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? 'Pause' : 'Start'}
          onPress={() => setIsSttarted(!isStarted)}
        />
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    paddingTop: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timmingWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    paddingTop: spacing.sm,
  },
  progressBar: {
    height: spacing.sm,
  },
});
