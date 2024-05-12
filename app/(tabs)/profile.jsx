import { View, Text, ScrollView  , Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Redirect , router } from 'expo-router';
import { Link } from 'expo-router'
import { createUser } from "../../lib/appwrite";
import Assurence from '../components/Assurence'
const Profilek = () =>{
    
    
    const[isSubmitting, setIsSublitting]=useState(false)


const Submit = async ()=>{
    /*if(!form.userName || !form.email || ! form.password){
        Alert.alert('Error', 'Il faut remplir tout les champs !')
    }
    setIsSublitting(true);

    try{
        const result = await createUser(form.email, form.password, form.userName)
    }catch(error){
        Alert.alert('Error', error.message)
    }finally{
        setIsSublitting(false)
    }*/

    router.push('info-user')
}
const Submitskip = async ()=>{}
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView >
                                    
                <View className="w-full justify-center items-center h-[70vh] px-4 my-6">
                    <View className="w-full justify-center px-4">
                    <Image  source={images.logo} 
                    resizeMode='contain' className="w-[115px] h-[35px] mt-10"/>
                    <Text className="text-2xl text-white text-pbold mt-4 px-4">Vos Voiture:</Text>
                    </View>
                    <Assurence posts = {[ {id: '1', text : 'Opel xv1' , image: images.v2},] ?? []}/>
                    
                    <View>
                    <CustomButton
                      title ="Ajouter Voiture"
                      handlePress={Submit}
                      containerStyles="w-50px h-5px "
                      isloading={isSubmitting}
                    />
                    <CustomButton
                      title ="Completer Profile"
                      handlePress={Submit}
                      containerStyles="w-[200] h-5px mt-5"
                      isloading={isSubmitting}
                    />
                    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profilek

/*com.jsm.opsii*/