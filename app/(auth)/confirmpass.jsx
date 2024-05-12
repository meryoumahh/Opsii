import { View, Text, ScrollView  , Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from '../../constants';
import CustomButton from '../components/CustomButton';
import FormField from "../components/FormField";
import { Link } from 'expo-router'
import { Redirect , router } from 'expo-router';
const Confirm = () => {
  const[form, setForm]=useState({
    code: '',
    })
    const Submit = () =>{router.push('finalestep') }
  return (
    <SafeAreaView className="bg-primary h-full ">
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className="w-full h-[60vh] items-center justify-center px-2 pt-10 mt-20 ">
            <Image
              source ={icons.tick}
              className="w-[200px] h-[130px]"
              resizeMode="contain"
            />

            <View className="relative mt-10">
              <Text className="text-2xl text-white
                    font-bold text-center mt-1">Réinitialisation du mot de passe réussie ! 
              </Text>
            </View>
            <CustomButton
                title="Continuer"
               handlePress={Submit}
                containerStyles="w-[50%] mt-7"
                />
          
          
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Confirm

