import React from 'react'
import {View, Text} from 'react-native'
import { IRecipes } from '../../reducers/profile/types';

const Recipe = (props : IRecipes) => {

  return (
    <View>
      <Text> {props?.title} </Text>
      <Text> {props?.calories} </Text>
      <Text> {props?.protein} </Text>
    </View>
  );
}
 
export default Recipe;