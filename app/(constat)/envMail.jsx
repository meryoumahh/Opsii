import { View, Text, ScrollView  , Image , Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link } from 'expo-router';
import { Redirect , router } from 'expo-router';
const EnvMail = () =>{
    const[form, setForm]=useState({
        email: '',
        password:'',
        });
    
    const[isSubmitting, setIsSubmitting]=useState(false)

    const Submit = async ()=>{
          
        router.push('info-acc');
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
                    <View className="w-full justify-center px-4">
                    <Image  source={images.logo} 
                    resizeMode='contain' className="w-[115px] h-[35px]"/>
                    <Text className="text-2xl text-white text-pbold mt-10">Saisir l'email de 2ème conducteur</Text>
                    </View>
                    <FormField 
                    title ="Email"
                    value={form.email}
                    handleChangeText ={(e) => setForm({ ...form,
                    email:e})}
                    otherStyles="w-[90%] mt-7"
                    keyboardType="email-address"
                    />
                    
                
                    

                    <CustomButton
                      title ="Suivant"
                      handlePress={Submit}
                      containerStyles="w-[90%] mt-7"
                      isloading={isSubmitting}
                    />
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default EnvMail;