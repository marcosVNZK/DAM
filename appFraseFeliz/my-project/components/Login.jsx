import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App2 = () => {
  const [name, setName] = useState('');
  const [randomPhrase, setRandomPhrase] = useState('');

  const phrases = [
    `Olá, ${name}! Tenha um ótimo dia!`,
    `Oi, ${name}! Que tal espalhar sorrisos por aí?`,
    `Ei, ${name}! Lembre-se de que você é incrível!`,
    `Olá, ${name}! Aproveite cada momento da sua jornada!`,
    `Oi, ${name}! Nunca desista dos seus sonhos!`,
    `Ei, ${name}! Seja a melhor versão de si mesmo!`,
    `Olá, ${name}! Que sua vida seja cheia de felicidade!`,
  ];

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FRASE FELIZ</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.buttonText}>Clique Aqui</Text>
      </TouchableOpacity>
      {randomPhrase ? <Text style={styles.phrase}>{randomPhrase}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  phrase: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App2;
