import { View, Text, ScrollView  , Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from '../../constants';
import CustomButton from '../components/CustomButton';
import FormField from "../components/FormField";
import { Link } from 'expo-router'
import { Redirect , router } from 'expo-router';
const Opsii = () => {
    const Submit = () =>{router.push('/mode') }
    const Submitr = () =>{router.push('home') }
  return (
    <SafeAreaView className="bg-primary h-full ">
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className="w-full h-[60vh] items-center justify-center px-2 pt-10 mt-20 ">
            <Image
              source ={icons.danger}
              className="w-[200px] h-[130px]"
              resizeMode="contain"
            />

            <View className="relative mt-10">
              <Text className="text-3xl text-white
                    font-bold text-center mt-1">Opsii!! vous voullez remplir un constat ? 
              </Text>
            </View >
            <View className="flex-row">
            <CustomButton
                title="retour"
               handlePress={Submitr}
                containerStyles="w-[40%] mt-7 mr-4"
                />
            <CustomButton
                title="Continuer"
               handlePress={Submit}
                containerStyles="w-[40%] mt-7 "
                />
            
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Opsii

