import { View, Text, TouchableOpacity } from 'react-native';

import { Styles } from './Styles';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({ name, onRemove } : Props){
  return(
    <View style={Styles.container}>
      <Text style={Styles.name}>
         {name}
      </Text>

      <TouchableOpacity style={Styles.button} onPress={onRemove}>
            <Text style={Styles.buttonText}>
              -
            </Text>
      </TouchableOpacity>
    </View>
  )
}