import { View, Text, ScrollView  , Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Redirect , router } from 'expo-router';
import { Link } from 'expo-router'
import { createUser } from "../../lib/appwrite";
const PhoneCon = () =>{
    const[form, setForm]=useState({
        phone:'',
        code:''
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

    router.push('etranger')
}
const Submitr = async ()=>{router.push('info-user')}
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                <View className="flex-row justify-between p-2.5 mt-4">
                <Image  source={icons.tickorange} 
                    resizeMode='contain' className="w-[50px] h-[35px] mr-4 "/>
                <Image  source={icons.tickorange} 
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
                    title ="Numero Téléphone"
                    value={form.phone}
                    handleChangeText ={(e)=>setForm({ ...form,
                    phone:e})}
                    otherStyles="w-[90%] mt-7"
                    />


                    <View className="relative mt-10">
                    <Text className="text-secondary
                    font-bold text-center mt-1">Confirmer voter numero! 
                    </Text>
                    </View>
                    <Text className="text-xl font-regular text-gray-100 mt-2 text-center">Code de confirmation</Text>
                    <FormField 
                    value={form.code}
                    handleChangeText ={(e)=>setForm({ ...form,
                    code:e})}
                    otherStyles="w-[50%] "
                    
                    />
                     <CustomButton
                    title="Confirm"
                    handlePress={Submit}
                    containerStyles="w-[50%] mt-5"
                    />
          
                     <Link href ="#" className="text-secondary mt-5">
                            Re-envoyer
                     </Link>
                    
                    
                    <View className="flex-row">
                    <CustomButton
                      title ="Retour"
                      handlePress={Submitr}
                      containerStyles="w-[30%] h-5px mt-7 "
                      isloading={isSubmitting}
                    />
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
export default PhoneCon

/*com.jsm.opsii*/