import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Turmas() {
  const [classes, setClasses] = useState([
    { id: '1', subject: 'Matemática', teacher: 'Prof. Carlos' },
    { id: '2', subject: 'História', teacher: 'Profª. Ana' },
    { id: '3', subject: 'Ciências', teacher: 'Prof. João' },
    { id: '4', subject: 'Geografia', teacher: 'Profª. Maria' },
  ]);

  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');

  const addClass = () => {
    if (subject.trim() && teacher.trim()) {
      setClasses([...classes, { id: Date.now().toString(), subject, teacher }]);
      setSubject('');
      setTeacher('');
    } else {
      Alert.alert('Erro', 'Por favor, insira o nome da matéria e do professor.');
    }
  };

  const deleteClass = (id) => {
    Alert.alert(
      'Excluir Turma',
      'Tem certeza que deseja excluir esta turma?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => setClasses(classes.filter(cls => cls.id !== id)),
        },
      ]
    );
  };

  const renderClass = ({ item }) => (
    <View style={styles.classContainer}>
      <Text style={styles.subjectText}>{item.subject}</Text>
      <Text style={styles.teacherText}>{item.teacher}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteClass(item.id)}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Turmas</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome da Matéria"
        value={subject}
        onChangeText={setSubject}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Nome do Professor"
        value={teacher}
        onChangeText={setTeacher}
      />
      
      <TouchableOpacity style={styles.addButton} onPress={addClass}>
        <Text style={styles.addButtonText}>Adicionar Turma</Text>
      </TouchableOpacity>

      <FlatList
        data={classes}
        renderItem={renderClass}
        keyExtractor={item => item.id}
        style={styles.classList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FF8000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  classList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  classContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  subjectText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  teacherText: {
    fontSize: 16,
    color: '#777',
  },
  deleteButton: {
    width: 70,
    marginTop: 10,
    backgroundColor: '#FF4500',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
