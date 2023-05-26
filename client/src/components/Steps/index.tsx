import React,{ useState} from 'react'
import {View,Image} from 'react-native'
import StepsScreen from '../StepsScreen'
import { useDispatch , useSelector} from 'react-redux'
import { update } from '../../reducers/profile/actions'

export interface IFirstStepProps {
  navigation : any
}

export const FirstStep = (props : IFirstStepProps) => {
  
  const dispatch = useDispatch()
  const profile = useSelector((state : any) => state.profile)

  const onChangeText = (_text : string) => {
    dispatch(update({
      ...profile,
      username : _text
    }))
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', width : '100%'}} >
      <StepsScreen
        onChangeText={(_text : string) => onChangeText(_text)}
        title='What is your name?'
        description="We want to know more about you"
        value={profile?.username}
        placeholderInput='David, Nicole, Maria, etc'
        subDescription='None of this information will be used for internal purposes.'
        image={(
          <Image
            source={require('../../assets/hello.png')}
            style={{width: 350, height: 350}}
          />
        )}
        onPressButton={() => profile?.username && props.navigation.navigate('SecondStep')}
      />
      
    </View>
  );
}
 

export const SecondStep = (props : IFirstStepProps) => {
  
  const dispatch = useDispatch()
  const profile = useSelector((state : any) => state.profile)

  const onChangeText = (_text : string) => {
    dispatch(update({
      ...profile,
      calories : _text
    }))
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', width : '100%'}} >
      <StepsScreen
        onChangeText={(_text : string) => onChangeText(_text)}
        title='How many calories do you want to eat?'
        description="I want to eat the calories of the following food"
        value={profile?.calories}
        placeholderInput='100, 300, 1000 ...'
        subDescription='This information will be used to show you recipes.'
        image={(
          <Image
            source={require('../../assets/secondStep.png')}
            style={{width: 300, height: 300}}
          />
        )}
        onPressButton={() => profile?.calories && props.navigation.navigate('ThirtyStep')}
      />
      
    </View>
  );
}

export const ThirtyStep = (props : IFirstStepProps) => {
  
  const dispatch = useDispatch()
  const profile = useSelector((state : any) => state.profile)

  const onChangeText = (_text : string) => {
    dispatch(update({
      ...profile,
      protein : _text
    }))
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', width : '100%'}} >
      <StepsScreen
        onChangeText={(_text : string) => onChangeText(_text)}
        title='How much protein do you want to eat?'
        description="I want to eat the protein of the following food"
        value={profile.protein}
        placeholderInput='100, 300, 1000 ...'
        subDescription='This information will be used to show you recipes.'
        image={(
          <Image
            source={require('../../assets/thirtySecond.png')}
            style={{width: 350, height: 350}}
          />
        )}
        onPressButton={() => profile.protein && props.navigation.navigate('Recipes')}
      />
    </View>
  );
}