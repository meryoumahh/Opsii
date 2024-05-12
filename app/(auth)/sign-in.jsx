import { View, Text, ScrollView  , Image , Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link } from 'expo-router';
import { Redirect , router } from 'expo-router';
const SignIn = () =>{
    const[form, setForm]=useState({
        email: '',
        password:'',
        });
    
    const[isSubmitting, setIsSubmitting]=useState(false)

    const Submit = async ()=>{
          
        router.push('/home');
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
                    <View className="w-full justify-center px-4">
                    <Image  source={images.logo} 
                    resizeMode='contain' className="w-[115px] h-[35px]"/>
                    <Text className="text-2xl text-white text-pbold mt-10">Connexion</Text>
                    </View>
                    <FormField 
                    title ="Email"
                    value={form.email}
                    handleChangeText ={(e) => setForm({ ...form,
                    email:e})}
                    otherStyles="w-[90%] mt-7"
                    keyboardType="email-address"
                    />
                    <FormField 
                    title ="Mot de passe"
                    tag="password"
                    value={form.password}
                    handleChangeText ={(e)=>setForm({ ...form,
                    password:e})}
                    otherStyles=" w-[90%] mt-7"
                    />
                  <View className="justify-center pt-5 flex-row gap-2">
                        <Link href ="/reset-options" className="text-base text-gray-100 font-pregular pl-40">
                            Mot de passe oublié
                        </Link>                        
                    </View>
                    

                    <CustomButton
                      title ="Connexion"
                      handlePress={Submit}
                      containerStyles="w-[90%] mt-7"
                      isloading={isSubmitting}
                    />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className ="text-lg text-gray-100 font-pregular ">
                            vous n'avez pas de compte?
                        </Text>
                        <Link href ="/sign-up" className="text-lg font-psemibold text-secondary">
                            Inscription
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn;