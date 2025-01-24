import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {evaluate} from 'mathjs';

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleChangeInput = text => {
    setInput(text);
  };

  const calculateResult = () => {
    try {
      const formattedInput = input.replace(/,/g, '+');
      const evaluatedResult = evaluate(formattedInput);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>String Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter expression (e.g., 3+2*5)"
        value={input}
        onChangeText={handleChangeInput}
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={calculateResult}>
        <Text style={styles.calculateTextStyl}>CALCULATE</Text>
      </TouchableOpacity>
      {result && <Text style={styles.result}>Sum: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '700',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  result: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: '700',
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2296f3',
  },
  calculateTextStyl: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default StringCalculator;
