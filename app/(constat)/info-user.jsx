import { View, Text, ScrollView  , Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Redirect , router } from 'expo-router';
import { Link } from 'expo-router'
import { createUser } from "../../lib/appwrite";
const InfoUser = () =>{
    const[form, setForm]=useState({
        firstname:'',
        lastname: '',
        address:''
        })
    
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

    router.push('phone')
}
const Submitskip = async ()=>{}
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                <View className="flex-row justify-between p-2.5">
                <Image  source={icons.tickorange} 
                    resizeMode='contain' className="w-[50px] h-[35px] mr-4 "/>
                <Image  source={icons.tickblanc} 
                    resizeMode='contain' className="w-[50px] h-[35px] mr-4 "/>
                <Image  source={icons.tickblanc} 
                    resizeMode='contain' className="w-[50px] h-[35px] mr-4"/>
                <Image  source={icons.tickblanc} 
                    resizeMode='contain' className="w-[50px] h-[35px] "/>

                </View>
                <View className="flex-row justify-end w-full px-4">
                <Link href ="/home" className=" text-xl text-pbold text-secondary ml-20">Skip</Link></View>
                    <View className="w-full justify-center px-4">
                    <Image  source={images.logo} 
                    resizeMode='contain' className="w-[115px] h-[35px] mt-10"/>
                    <Text className="text-2xl text-white text-pbold mt-4 px-4">Profile</Text>
                    </View>
                    <FormField 
                    title ="Nom"
                    value={form.firstname}
                    handleChangeText ={(e)=>setForm({ ...form,
                    firstname:e})}
                    otherStyles="w-[90%] mt-7"
                    />
                    <FormField 
                    title ="Prenom"
                    value={form.lastname}
                    handleChangeText ={(e)=>setForm({ ...form,
                    lastname:e})}
                    otherStyles="w-[90%] mt-7"
                    />
                    <FormField 
                    title ="Address"
                    value={form.address}
                    handleChangeText ={(e)=>setForm({ ...form,
                    address:e})}
                    otherStyles=" w-[90%] mt-7"
                    />
                    
                    <View className="flex-row">
                    
                    <CustomButton
                      title ="Suivant"
                      handlePress={Submit}
                      containerStyles="w-[30%] h-5px mt-7 ml-4"
                      isloading={isSubmitting}
                    />
                    
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default InfoUser

/*com.jsm.opsii*/