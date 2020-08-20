import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Button = (props) => (
  <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
    <Text style={styles.txtStyle}>Add</Text>
  </TouchableOpacity>
);
const styles = {
  buttonStyle: {
    backgroundColor: 'white',
    width: '80%',
    height: '13%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    marginTop: '1%',
    borderColor: 'green',
  },
  txtStyle: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
};
export {Button};
