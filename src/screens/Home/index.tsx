import React, { useState }  from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { Styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticiantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome na lista!") 
    } 

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');

  }

  function handleParticiantRemove(name: string) {
    
    Alert.alert("Remover", `Remover o aprticipante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevtState => prevtState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return(
    <View style={Styles.container}>
      <Text style={Styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={Styles.eventDay}>
        Segunda, 01 de julho de 2024
      </Text>

      <View style={Styles.form}>
        <TextInput style={Styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor={'#6b6b6b'}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={Styles.button} onPress={handleParticiantAdd}>
          <Text style={Styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item} 
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={() => handleParticiantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={Styles.listEmptyText}>
            Ninguem chegou no evento ainda, adicione participantes á lista!
          </Text>
        )}
      />
      
    </View>
  )
}