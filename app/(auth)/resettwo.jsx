import { View, Text, ScrollView  , Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link } from 'expo-router'
import { Redirect , router } from 'expo-router';
const SignIn = () =>{
    const[form, setForm]=useState({
        password1: '',
        password:''
        })
    
    const[isSubmitting, setIsSublitting]=useState(false)


const Submit = () =>{router.push('confirmpass') }
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
                    <View className="w-full justify-center items-center px-4">
                    <Image  source={images.logo} 
                    resizeMode='contain' className="w-[115px] h-[35px]"/>
                    <Text className="text-2xl text-white text-pbold mt-10">Réinitialiser le mot de passe</Text>
                    </View>
                    <FormField 
                    title ="Mot de passe"
                    tag="password"
                    value={form.password1}
                    handleChangeText ={(e1)=>setForm({ ...form,
                    password1:e1})}
                    otherStyles=" w-[90%] mt-7"
                    />
                    <FormField 
                    title =" Confirmer Mot de passe"
                    tag="password"
                    value={form.password}
                    handleChangeText ={(e)=>setForm({ ...form,
                    password:e})}
                    otherStyles=" w-[90%] mt-7"
                    />
                    

                    <CustomButton
                      title ="Réinitialiser"
                      handlePress={Submit}
                      containerStyles="w-[90%] mt-7"
                      isloading={isSubmitting}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn