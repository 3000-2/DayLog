import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import logContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

function FeedsScreen() {
  const {logs} = useContext(logContext);
  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default FeedsScreen;
