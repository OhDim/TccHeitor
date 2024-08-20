import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Boletim() {
  const [grades, setGrades] = useState([
    { id: '1', subject: 'Matemática', grade: '8.5', status: 'Aprovado' },
    { id: '2', subject: 'História', grade: '7.0', status: 'Aprovado' },
    { id: '3', subject: 'Ciências', grade: '6.5', status: 'Reprovado' },
    { id: '4', subject: 'Geografia', grade: '9.0', status: 'Aprovado' },
    { id: '5', subject: 'Português', grade: '8.0', status: 'Aprovado' },
  ]);

  const [editingGrade, setEditingGrade] = useState(null);
  const [newGrade, setNewGrade] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const handleEdit = (id) => {
    const grade = grades.find(g => g.id === id);
    setEditingGrade(grade);
    setNewGrade(grade.grade);
    setNewStatus(grade.status);
  };

  const handleSave = () => {
    if (editingGrade) {
      const updatedGrades = grades.map(g => 
        g.id === editingGrade.id 
          ? { ...g, grade: newGrade, status: newStatus }
          : g
      );
      setGrades(updatedGrades);
      setEditingGrade(null);
      setNewGrade('');
      setNewStatus('');
    }
  };

  const handleAdd = () => {
    if (newGrade.trim() && newStatus.trim()) {
      const newId = (grades.length + 1).toString();
      setGrades([...grades, { id: newId, subject: `Nova Matéria ${newId}`, grade: newGrade, status: newStatus }]);
      setNewGrade('');
      setNewStatus('');
    } else {
      Alert.alert('Erro', 'Por favor, insira uma nota e um status.');
    }
  };

  const handleDelete = (id) => {
    Alert.alert(
      'Excluir Matéria',
      'Tem certeza que deseja excluir esta matéria?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => setGrades(grades.filter(g => g.id !== id)),
        },
      ]
    );
  };

  const renderGrade = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.subject}</Text>
      <Text style={styles.cell}>{item.grade}</Text>
      <Text style={[styles.cell, item.status === 'Aprovado' ? styles.passed : styles.failed]}>{item.status}</Text>
      <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item.id)}>
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boletim</Text>
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Matéria</Text>
          <Text style={styles.headerText}>Nota</Text>
          <Text style={styles.headerText}>Status</Text>
          <Text style={styles.headerText}>Ações</Text>
        </View>
        <FlatList
          data={grades}
          renderItem={renderGrade}
          keyExtractor={item => item.id}
        />
      </View>

      {editingGrade ? (
        <View style={styles.editContainer}>
          <Text style={styles.editTitle}>Editar Nota</Text>
          <TextInput
            style={styles.input}
            placeholder="Nota"
            value={newGrade}
            onChangeText={setNewGrade}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Status (Aprovado/Reprovado)"
            value={newStatus}
            onChangeText={setNewStatus}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.addContainer}>
          <Text style={styles.addTitle}>Adicionar Nova Nota</Text>
          <TextInput
            style={styles.input}
            placeholder="Nota"
            value={newGrade}
            onChangeText={setNewGrade}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Status (Aprovado/Reprovado)"
            value={newStatus}
            onChangeText={setNewStatus}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
            <Text style={styles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  table: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FF8000',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  passed: {
    color: '#4CAF50', // Green for passed
  },
  failed: {
    color: '#F44336', // Red for failed
  },
  editButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#F44336',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  editContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  addContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  editTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  addTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FF8000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
