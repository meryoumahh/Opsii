import { View, Text, TextInput, TouchableOpacity , Image} from "react-native";
import React, { useState } from "react";
import { icons } from '../../constants'

const SearchInput = ({title, tag, value, placeholder, handleChangeText, otherStyles, ... props}) =>{
    const [showPassword, setShowPassword]= useState(true)
    return (
        
                <View className="border-2 border-black-200 w-full h-16 px-2 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
                <TextInput
                className="text-base mt-0.5 text-white flex-1 font-pregular"
                value={value}
                placeholder="Rechercher un constat ou assurence"
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={tag ==='password'&& showPassword}
                />
                <TouchableOpacity>
                    <Image
                    source ={icons.search}
                    className="w-5 h-5"
                    resizeMode="constain"
                    />
                </TouchableOpacity>
            </View>
       
    )
}

export default SearchInput