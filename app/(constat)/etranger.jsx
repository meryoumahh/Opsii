import { View, Text, ScrollView  , Image ,StyleSheet,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import CustomButton from '../components/CustomButton';
import FormField from "../components/FormField";
import { Link } from 'expo-router'
import { Redirect , router } from 'expo-router';
const Etranger = () => {
  
    const SubmitOui = () =>{router.push('info-voi-etran')}
    
    const SubmitNon = () =>{router.push('info-voi')}
    
  return (
    <SafeAreaView className="bg-primary h-full ">
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className="w-full h-[60vh] items-center justify-center px-2 pt-10 mt-20 ">
            <Image
              source ={images.logo}
              className="w-[200px] h-[130px]"
              resizeMode="contain"
            />

            <View className="relative mt-10">
              <Text className="text-2xl text-white
                    font-bold text-center mt-1">Etes vous etranger?
              </Text>
            </View>
            <View className="flex-row mt-15">
            <CustomButton
                title="Oui"
                
                handlePress={SubmitOui }
                containerStyles="w-[30%] mt-7"
                />
            <CustomButton
                title="Non"
                
                handlePress={SubmitNon}
                containerStyles="w-[30%] mt-7 ml-4"
            />
            </View>
          
          
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Etranger


