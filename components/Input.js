import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = (props) => 
<TextInput placeholder={props.placeholder} 
style={[styles.inputTextStyle, props.style]}
value={props.value}
onChangeText={(value)=>props.onChangeText(value)}
placeholderTextColor='grey'
/>
const styles = {
    inputTextStyle: {
      backgroundColor: 'white',
      color: 'green',
      width: '95%',
      height: '20%',
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: '#333333',
      textDecorationColor: 'white',
      paddingLeft: 20,
      fontSize: 15
    },
}
export {Input};
