import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';

import Recipe from '../../commons/Recipe';
import { IRecipes } from '../../reducers/profile/types';
import { useFetch } from '../../hooks/useFetch';

const Recipes = () => {

  const profile = useSelector((state : any) => state.profile);

  const { Response , Error} = useFetch({
    path : `/recipes/${profile.protein}/${profile.calories}`,
  });

  const [Recipes, setRecipes] = useState <IRecipes[]>([])

  useEffect(() => {
    if(!Error && Response && Response?.data?.recommended_recipes) setRecipes(Response.data.recommended_recipes)
  }, [Response])


  return (
    <View style={{marginTop : 80}} >
      <Text style={{fontSize : 30,  fontWeight : 'bold', textAlign : 'center', color : 'black'}}> Recipes </Text>
      <Text style={{fontSize : 10,  fontWeight : 'bold', marginBottom : 30, textAlign : 'center'}}> This recipes our think find you </Text>
      <FlatGrid
        itemDimension={130}
        data={Recipes}
        spacing={10}
        renderItem={({ item }) => (
          <Recipe
            {...item}
          />
        )}
      />
    </View>
  );
}
 
export default Recipes;