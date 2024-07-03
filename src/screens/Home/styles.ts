import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121016',
      padding: 50
    },
    eventName: {
      color: '#fdfcfe',
      fontSize: 28,
      fontWeight: 'semibold',
      marginTop: 48
    },
    eventDay: {
      color: '#6b6b6b',
      fontSize: 24
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: '#fff',
      padding: 15,
      fontSize: 18,
      marginRight: 12
    },
    buttonText: {
     color: '#fff',
     fontSize: 24 
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center'
    }
   })