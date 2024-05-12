import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'

const Assurence = ({posts}) => {
  return (
    <FlatList 
        data = {posts}
        keyExtractor={(item ) => item.$id}
        renderItem={({ item }) =>(
          <View style={StyleSheet.item}>
              <Image 
                source={item.image}
                style={style.image}/>
              <Text className="text-secondary " >{item.text}</Text>
          </View>
            
        )}
        horizontal
    />
  )
}

export default Assurence

const style = StyleSheet.create({
  item:{
    alignItems : 'center',
    justifyContent:'center',
    marginRight:20,
    marginLeft: 20,
  },
  image:{
    width:200,
    height:200,
    padding: 10,
    resizeMode:'contain',
  
  }
});