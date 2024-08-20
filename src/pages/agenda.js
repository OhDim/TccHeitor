import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Modal, Button, Alert } from 'react-native';

export default function Agenda() {
  const [events, setEvents] = useState([
    { id: '1', date: '2024-08-18', time: '10:00', title: 'Reunião de Projeto', description: 'Discussão sobre o progresso do projeto.' },
    { id: '2', date: '2024-08-18', time: '14:00', title: 'Almoço com Cliente', description: 'Almoço de negócios com o cliente.' },
    { id: '3', date: '2024-08-19', time: '09:00', title: 'Apresentação', description: 'Apresentação do novo produto.' },
    { id: '4', date: '2024-08-20', time: '16:00', title: 'Revisão de Código', description: 'Revisão de código com a equipe.' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    date: '',
    time: '',
    title: '',
    description: '',
  });

  const handleAddEvent = () => {
    if (newEvent.date && newEvent.time && newEvent.title) {
      setEvents([...events, { id: Date.now().toString(), ...newEvent }]);
      setNewEvent({ date: '', time: '', title: '', description: '' });
      setShowModal(false);
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const groupedEvents = events.reduce((groups, event) => {
    const date = event.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {});

  const renderEvent = ({ item }) => (
    <View style={styles.eventContainer}>
      <Text style={styles.eventTime}>{item.time}</Text>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </View>
  );

  const renderDate = ({ item: date }) => (
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>{date}</Text>
      <FlatList
        data={groupedEvents[date]}
        renderItem={renderEvent}
        keyExtractor={item => item.id}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamento de Eventos</Text>
      <FlatList
        data={Object.keys(groupedEvents)}
        renderItem={renderDate}
        keyExtractor={item => item}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setShowModal(true)}>
        <Text style={styles.addButtonText}>+ Adicionar Evento</Text>
      </TouchableOpacity>

      {/* Modal para adicionar evento */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Novo Evento</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Data (AAAA-MM-DD)"
              value={newEvent.date}
              onChangeText={(text) => setNewEvent({ ...newEvent, date: text })}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Hora (HH:MM)"
              value={newEvent.time}
              onChangeText={(text) => setNewEvent({ ...newEvent, time: text })}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Título"
              value={newEvent.title}
              onChangeText={(text) => setNewEvent({ ...newEvent, title: text })}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Descrição (opcional)"
              value={newEvent.description}
              onChangeText={(text) => setNewEvent({ ...newEvent, description: text })}
            />
            <Button title="Adicionar Evento" onPress={handleAddEvent} />
            <Button title="Cancelar" onPress={() => setShowModal(false)} color="#FF4500" />
          </View>
        </View>
      </Modal>
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
  dateContainer: {
    marginBottom: 20,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF8000',
  },
  eventContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  eventTime: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDescription: {
    fontSize: 14,
    color: '#777',
  },
  addButton: {
    backgroundColor: '#FF8000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
