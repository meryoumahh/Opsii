import { View, Text, TextInput, TouchableOpacity , Image} from "react-native";
import React, { useState } from "react";
import { icons } from '../../constants'

const FormField = ({title, tag, value, placeholder, handleChangeText, otherStyles, ... props}) =>{
    const [showPassword, setShowPassword]= useState(true)
    return (
        <View className ={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
                <View className="border-2 border-black-200 w-full h-16 px-2 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput
                className="flex-1 text-white font-psemibold text-base"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={tag ==='password'&& showPassword}
                />
                {tag ==='password'&&(
                    <TouchableOpacity onPress={()=> 
                    setShowPassword(!showPassword)}>
                        <Image source ={!showPassword ? icons.eye : icons.eyehide} className="w-6 h-6"
                        resizeMode='contain'/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField