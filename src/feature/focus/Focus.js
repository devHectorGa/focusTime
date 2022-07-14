import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components';
import { sizes } from '../../utils/sizes';
import { colors } from '../../utils/colors';

const label = 'What would you like to focus on?';

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            label={label}
            style={styles.textInput}
            onChangeText={(text) => setTmpItem(text)}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(tmpItem)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    padding: sizes.md,
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.95,
  },
  inputContainer: {
    paddingTop: sizes.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
