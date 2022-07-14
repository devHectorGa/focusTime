import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Focus, Timer, FocusHistory } from './src/feature';
import { colors, sizes } from './src/utils';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [history, setHistory] = useState([])
  return (
    <SafeAreaView style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
            setFocusSubject(null)
          }}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory history={history} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
