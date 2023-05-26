import React from 'react'
import {TextInput} from 'react-native'


export interface IInput {
  onChangeText : (text : string) => void
  value : string
  placeholder : string
}

const Input = (props : IInput) => {
  
  return (
    <TextInput
      style={{
        width : '90%',
        margin: 12,
        paddingHorizontal: 15,
        shadowColor: "#cacaca",
        shadowOffset: {
          width: 0,
          height: 15,
        },
        shadowOpacity:  0.24,
        shadowRadius: 16.41,
        elevation: 20,
        borderRadius : 16,
        borderWidth : 1,
        borderColor : '#cacaca',
      }}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
}
 
export default Input;