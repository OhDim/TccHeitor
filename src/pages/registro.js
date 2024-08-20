import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Registro({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleRegister = () => {
    // Lógica de registro aqui
    alert(`Registrando: ${name}, ${email}`);
    // Redirecionar para a tela de login após o registro
    navigation.navigate('Login');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.button, buttonPressed && styles.buttonPressed]}
          onPressIn={() => setButtonPressed(true)}
          onPressOut={() => setButtonPressed(false)}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8000', // Cor de fundo
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400, // Limitar a largura do formulário
    padding: 20,
    backgroundColor: '#fff', // Cor de fundo do container do formulário
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#FF8000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: '#e65c00', // Cor do botão quando pressionado
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
