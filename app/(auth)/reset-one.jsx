import { View, Text, ScrollView  , Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import CustomButton from '../components/CustomButton';
import FormField from "../components/FormField";
import { Link } from 'expo-router'
import { Redirect , router } from 'expo-router';
const ResetOne = () => {
  const[form, setForm]=useState({
    code: '',
    })
    const Submit = () =>{router.push('resettwo') }
  return (
    <SafeAreaView className="bg-primary h-full ">
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className="w-full items-center px-2 pt-10 mt-20 ">
            <Image
              source ={images.logo}
              className="w-[200px] h-[130px]"
              resizeMode="contain"
            />

            <View className="relative mt-10">
              <Text className="text-2xl text-white
                    font-bold text-center mt-1">Réinitialiser le mot de passe</Text>
            </View>
            <Text className="text-sm font-regular text-gray-100 mt-5 text-center">Saisir votre code</Text>
            <FormField 
                    value={form.code}
                    handleChangeText ={(e)=>setForm({ ...form,
                    code:e})}
                    otherStyles="w-[50%] "
                    
                    />
            <CustomButton
                title="Confirm"
                handlePress={Submit}
                containerStyles="w-[50%] mt-7"
                />
          
            <Link href ="#" className="text-secondary mt-20">
                            Re-envoyer
            </Link>
          
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ResetOne

