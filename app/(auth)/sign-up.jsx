import { View, Text, ScrollView  , Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Redirect , router } from 'expo-router';
import { Link } from 'expo-router'
import { createUser } from "../../lib/appwrite";
const SignUp = () =>{
    const[form, setForm]=useState({
        userName:'',
        email: '',
        password:''
        })
    
    const[isSubmitting, setIsSubmitting]=useState(false)


    const Submit = async ()=>{
    if(!form.userName || !form.email || ! form.password){
        Alert.alert('Error', 'Il faut remplir tout les champs !');
    }
    setIsSubmitting(true);

    try{
        const result = await createUser(form.email, form.password, form.userName);
       
    } catch (error){
        Alert.alert( 'Error' , error.message);
    } finally {
        setIsSubmitting(false);
    }
    router.push('confirm');
    
    
    };
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
                    <View className="w-full justify-center px-4">
                    <Image  source={images.logo} 
                    resizeMode='contain' className="w-[115px] h-[35px]"/>
                    <Text className="text-2xl text-white text-pbold mt-10">Inscription</Text>
                    </View>
                    <FormField 
                    title ="Nom d'utilisateur"
                    value={form.userName}
                    handleChangeText ={(e)=>setForm({ ...form,
                    userName:e})}
                    otherStyles="w-[90%] mt-7"
                    />
                    <FormField 
                    title ="Email"
                    value={form.email}
                    handleChangeText ={(e)=>setForm({ ...form,
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
                    

                    <CustomButton
                      title ="Inscription"
                      handlePress={Submit}
                      containerStyles="w-[90%] mt-7"
                      isloading={isSubmitting}
                    />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className ="text-lg text-gray-100 font-pregular">
                            vous avez deja un compte?
                        </Text>
                        <Link href ="/sign-in" className="text-lg font-psemibold text-secondary">
                            Connexion
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignUp

/*com.jsm.opsii*/