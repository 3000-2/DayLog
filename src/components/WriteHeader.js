import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransparentCircleButton from './TransparentCircleButton';
import {useNavigation} from '@react-navigation/native';

function WriteHeader() {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <TransparentCircleButton
        onPress={onGoBack}
        name={'arrow-back'}
        color={'#424242'}
      />
      <View style={styles.buttons}>
        <TransparentCircleButton
          name={'delete-forever'}
          color={'#ef5350'}
          hasMarginRight
        />
        <TransparentCircleButton name={'check'} color={'#009688'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WriteHeader;
