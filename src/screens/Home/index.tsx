import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { Styles } from './styles';

export function Home() {
  const participants = ['Samuel','Batista','React','Native','Mobile','Aula 2','Dia 2','Ferias',
    'Testando','Terça feira','TypeScript','Lista'
  ];

  function handleParticiántAdd() {
    if(participants.includes("Samuel")){
      return Alert.alert("Participante existe", "Já existe um participante com esse nome na lista!") 
    } 
  }

  function handleParticiántRemove(name: string) {
    Alert.alert("Remover", `Remover o aprticipante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado com sucesso!')
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
        />

        <TouchableOpacity style={Styles.button} onPress={handleParticiántAdd}>
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
            onRemove={() => handleParticiántRemove(item)}/>
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