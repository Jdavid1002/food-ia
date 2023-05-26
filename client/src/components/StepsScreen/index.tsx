import React,{ useState} from 'react'
import {View, TouchableOpacity,Text, Image} from 'react-native'
import Input from '../../commons/Input'


export interface IStepsScreen {
  onChangeText : (text: string) => void;
  value : string
  title : string
  description : string
  placeholderInput ? : string
  subDescription ? : string
  image : JSX.Element
  onPressButton : () => void
}

const StepsScreen = (props : IStepsScreen) => {


  return (
    <View style={{flex:1, justifyContent:'space-between', alignItems:'center', width : '100%', height : '100%', paddingTop : 45}} >
      
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
        {props.image && props.image}
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingHorizontal : 20}}>
        <Text style={{textAlign : 'center', fontSize: 30, color : 'black', fontWeight : 'bold', marginTop : 20}} > {props.title} </Text>
        <Text style={{textAlign : 'center', fontSize: 20, color : 'black', marginTop : 10}} > {props.description} </Text>
        <Text style={{textAlign : 'center', fontSize: 12, color : 'black', marginTop : 40}} > {props.subDescription} </Text>
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center', width : '100%'}} >
        <Input  
          onChangeText={(_text) => props.onChangeText(_text)}
          value={props.value}
          placeholder={props.placeholderInput || ''}
        />

        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            backgroundColor: 'black',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => props.onPressButton()}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >
            Send
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
 
export default StepsScreen;