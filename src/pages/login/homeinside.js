import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa a função para acessar a navegação

import welcomeIcon from '../assets/Images/icone01.png'; 

export default function HomeInside() {
  const navigation = useNavigation(); // Acessa a navegação

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter(taskId => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  const deleteTask = (id) => {
    Alert.alert(
      'Excluir Tarefa',
      'Tem certeza que deseja excluir esta tarefa?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => setTasks(tasks.filter(task => task.id !== id)),
        },
      ]
    );
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={[styles.taskItem, completedTasks.includes(item.id) ? styles.taskCompleted : styles.taskPending]}
        onPress={() => toggleTaskCompletion(item.id)}
      >
        <Text style={styles.taskText}>{item.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Perfil')} // Navega para a tela de perfil
        >
          <Image source={welcomeIcon} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
      </View>
      
      <ScrollView style={styles.notificationContainer}>
        <Text style={styles.notificationTitle}>Notificações</Text>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Você tem uma nova mensagem.</Text>
        </View>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Seu perfil foi atualizado.</Text>
        </View>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Novo comentário em sua postagem.</Text>
        </View>
      </ScrollView>

      <View style={styles.taskSection}>
        <Text style={styles.taskTitle}>Tarefas</Text>
        <TextInput
          style={styles.taskInput}
          placeholder="Adicionar nova tarefa"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
        <FlatList
          data={tasks}
          renderItem={renderTask}
          keyExtractor={item => item.id}
          style={styles.taskList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8000', // Cor de fundo
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 30, // Define o círculo
    padding: 10, // Ajuste o tamanho do círculo
    marginRight: 15, // Espaço entre o ícone e o texto
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30, // Ajuste o tamanho conforme necessário
    height: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationContainer: {
    maxHeight: 200,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  notificationItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    textAlign: 'center',
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  taskSection: {
    flex: 1,
    marginTop: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  taskInput: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
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
    marginBottom: 10,
  },
  addButtonText: {
    color: '#FF8000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskList: {
    marginTop: 10,
  },
  taskContainer: {
    marginBottom: 10,
  },
  taskItem: {
    padding: 15,
    marginBottom: 5,
    borderRadius: 5,
  },
  taskPending: {
    backgroundColor: '#b54500',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  taskCompleted: {
    backgroundColor: '#00ff00',
    borderColor: '#bbb',
    borderWidth: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#b54500',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
