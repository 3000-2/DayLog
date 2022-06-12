import React from 'react';
import {StyleSheet, View} from 'react-native';
import WriteHeader from '../components/WriteHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

function WriteScreen() {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default WriteScreen;
