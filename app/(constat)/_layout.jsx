import { View, Text } from "react-native";
import React from "react";
import { Stack } from 'expo-router';

const AuthLayout = () =>{
    return (
        <>
        <Stack>
            <Stack.Screen
            name="info-user"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="phone"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="etranger"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="info-voi-etran"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="info-voi"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="info-acc"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="mode"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="codeQr"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="envMail"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="croquis"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="degat"
            options={{
                headerShown: false
            }}
            />
            
            <Stack.Screen
            name="DHLacc"
            options={{
                headerShown: false
            }}
            />
            
            <Stack.Screen
            name="finalisation"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="otp"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="permis"
            options={{
                headerShown: false
            }}
            />
        </Stack>
        </>
    )
}
export default AuthLayout