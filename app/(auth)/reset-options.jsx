import { View, Text, ScrollView  , Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link } from 'expo-router'
import { Redirect , router } from 'expo-router';
const Reset = () =>{
    const[isSubmitting, setIsSublitting]=useState(false)


const Submit = () =>{router.push('reset-one')}
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
                    <View className="w-full justify-center px-4 mt-5">
                    <Image  source={images.logo} 
                    resizeMode='contain' className="w-[115px] h-[35px]"/>
                    <Text className="text-2xl text-white text-pbold mt-5">Réinitialiser le mot de passe</Text>
                    </View>


                    <CustomButton
                      title ="Via Email"
                      handlePress={Submit}
                      containerStyles="w-[90%] mt-20"
                      isloading={isSubmitting}
                    />

                    <CustomButton
                      title ="Via SMS"
                      handlePress={Submit}
                      containerStyles="w-[90%] mt-7"
                      isloading={isSubmitting}
                    />
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Reset