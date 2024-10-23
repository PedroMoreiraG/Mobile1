import { StatusBar } from 'expo-status-bar';
import react, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textCounter}>Counter: {count}</Text>
        <Button title="Aumentar" style={styles.button} color="#f194ff" onPress={()=> setCount(count + 1)}></Button>
        <Button title="Disminuir" style={styles.button} color="#000" onPress={() => setCount(count - 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  textCounter: {
    fontSize: 36,
    marginBottom: 20,
    color: '##f194ff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0000',
    padding: 100,
    borderRadius: 10,
    margin:10,
    width: 150,
    alignItems: 'center',
  },
});

export default CounterApp;