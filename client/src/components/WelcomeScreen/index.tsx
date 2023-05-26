import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';


export interface IWelcomeScreen {
  navigation : any
}

const WelcomeScreen = (props : IWelcomeScreen) => {

  return (
    <View style={{backgroundColor : '#FFEAB6', flex: 1, justifyContent: 'space-around', alignItems: 'center', width: '100%', padding: 20 }} >
      <Image
        source={require('../../../src/assets/firstPeople.png')}
        style={{ width: '100%', height: '50%' }}
      />
      <View style={{ width: '100%', justifyContent: 'flex-start', height: '30%' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', width: '80%' }} >
          You can get recipes with your favorite
          <Text style={{ color: '#FF8660' }} >
            {''} ingredients {''}
          </Text>
          calories
          and
          proteins.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'black',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => props.navigation.navigate('FirstStep')}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >
          Get Started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }} >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;