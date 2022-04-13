import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.styles';

const Input = ({placeholder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
