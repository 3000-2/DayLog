import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';

function FeedsScreen() {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
