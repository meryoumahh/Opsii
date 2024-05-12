import { View, Text } from "react-native";
import React from "react";
import { Stack } from 'expo-router';

const AuthLayout = () =>{
    return (
        <>
        <Stack>
            <Stack.Screen
            name="sign-in"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="sign-up"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="confirm"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="reset-options"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="reset-one"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="resettwo"
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen
            name="confirmpass"
            options={{
                headerShown: false
            }}
            />
            <Stack.Screen
            name="finalestep"
            options={{
                headerShown: false
            }}
            />
        </Stack>
        </>
    )
}
export default AuthLayout