// src/pages/comunicados.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Dados de exemplo para os comunicados
const comunicados = [
  { id: '1', title: 'Reunião de Pais', content: 'Haverá uma reunião de pais e mestres no dia 20 de agosto às 19h na escola.' },
  { id: '2', title: 'Mudança de Horário', content: 'A partir da próxima semana, as aulas de matemática serão das 10h às 11h.' },
  { id: '3', title: 'Feriado Escolar', content: 'No dia 15 de agosto teremos feriado escolar. Aproveitem o descanso!' },
];

export default function Comunicados() {
  const renderComunicado = ({ item }) => (
    <View style={styles.comunicadoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Comunicados</Text>
      <FlatList
        data={comunicados}
        renderItem={renderComunicado}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  comunicadoContainer: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8000',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
});
