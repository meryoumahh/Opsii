import { View, Text, ScrollView  , Image, Alert, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from '../../constants';
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Redirect , router } from 'expo-router';
import { Link } from 'expo-router'
import { createUser } from "../../lib/appwrite";
import Assurence from '../components/Assurence';

const Croquis = () =>{
    
    const[isSubmitting, setIsSublitting]=useState(false)
    const[uploading, setuploading]=useState(false);
    const [Form, setForm] = useState({
        video:null,
    })


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

    router.push('/home')
}
const Submitskip = async ()=>{}
    return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView className="px-4 my-6">
                
            <View className="w-full justify-center items-center h-[full] px-4">
                
                    <View className="w-full justify-center ">
                    <Image  source={images.logo} 
                    resizeMode='contain' className="w-[115px] h-[35px] mt-10"/>
                    </View>
                <View className="mt-20 space-y-2">
                <Text className="text-base text-gray-100 font-pmedium mt-5">
                    Scanner Votre Permis 
                </Text>

                    <TouchableOpacity >
                        {Form.video?(
                            <Video 
                             source={{uri:Form.video.url}}
                             className="w-full h-64 rounded-2xl"
                             useNativeControls
                             resizeMode={resizeMode.COVER}
                             isLooping
                            />
                        ):(

                            <View className ="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                                <View className ="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                                    <Image
                                    source ={ icons.upload }
                                    resizeMode="contain" 
                                    className="w-1/2 h-1/2"
                                    />
                                </View>
                            </View>

                        )

                        }
                    </TouchableOpacity>

                </View>

                <CustomButton
                      title ="Terminer"
                      handlePress={Submit}
                      containerStyles="w-[30%] h-5px mt-7 ml-4"
                      isloading={isSubmitting}
                    />

            </View>
                
            </ScrollView>
        </SafeAreaView>
    )
}
export default Croquis

/*com.jsm.opsii*/