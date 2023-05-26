import {View, Image, TouchableOpacity} from 'react-native';


export interface IHeader {
  navigation : any
}

const Header = (props : any) => {
  return (
    <View style={{height : 0, width : '100%', alignItems : 'center', flexDirection : 'row', position : 'relative'}}>
      <TouchableOpacity 
        onPress={() => props.navigation.goBack()}
        style={{
          marginLeft : 10,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 18,
          },
          shadowOpacity:  0.25,
          shadowRadius: 20.00,
          elevation: 24,
          width : 45,
          height : 45,
          backgroundColor : '#F8F8F8',
          justifyContent : 'center',
          alignItems : 'center',
          borderRadius : 6,
          position : 'absolute',
          top : 10
        }}
      >
        <Image 
          source={require('../../assets/back-arrow.png')}
          style={{
            width : 10, 
            height : 20, 
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
 
export default Header;