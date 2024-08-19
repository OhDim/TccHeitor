import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('Atividades')} // Navegação para "Minhas atividades"
      >
        <Text style={styles.optionText}>Minhas atividades</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('Turmas')} // Navegação para "Minhas turmas"
      >
        <Text style={styles.optionText}>Minhas turmas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('Agenda')} // Navegação para "Agenda"
      >
        <Text style={styles.optionText}>Agenda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('Boletim')} // Navegação para "Meu boletim"
      >
        <Text style={styles.optionText}>Meu boletim</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#FF8000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
});
