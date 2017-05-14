import React from 'react'
import {Text, TouchableHighlight,View,Alert} from 'react-native'


var alertMessage = 'I hate Khoa';
const MyAlert = () => {

  return (
    <TouchableHighlight style={styles.wrapper}
      onPress={() => Alert.alert(
        'WARNING',
        alertMessage,
      )}>
      <View style={styles.button}>
        <Text>Click here for important information</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = {
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#999999',
    padding: 10,
  },
}


export default MyAlert;
