import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Agenda() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      {/* Adicione aqui o conteúdo específico da agenda */}
    </View>
  );
}
//arroz com batata

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF8000', // Altere conforme necessário
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
