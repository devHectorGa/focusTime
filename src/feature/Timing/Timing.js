import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  const timers = [10, 15, 20];

  return (
    <>
      {timers.map((time) => (
        <View style={styles.timingButton} key={time}>
          <RoundedButton
            size={75}
            title={time.toString()}
            onPress={() => onChangeTime(time)}
          />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
