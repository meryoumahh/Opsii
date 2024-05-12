import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View , Image} from 'react-native';
import { Redirect , router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import 'nativewind';
import CustomButton from './components/CustomButton';


export default function App() {
    
  return (
    <SafeAreaView className = "bg-primary h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="w-full items-center px-2 pt-10 mt-20 ">
                <Image
                    source ={images.logo}
                    className="w-[200px] h-[200px]"
                    resizeMode="contain"
                />
                
                <View className="relative mt-10">
                    <Text className="text-3xl text-white
                            font-bold text-center">Manière Rapide et Facile de Gérer les Accidents,{' '}
                            <Text className="text-secondary-200">Opsii</Text>
                    </Text>
                </View>
                <Text className="text-sm font-regular text-gray-100 mt-7 text-center">Économisez votre temps et remplissez votre constat accient en quelques étapes!</Text>
                <CustomButton
                title="Connexion"
                handlePress={() => router.push('sign-in') }
                containerStyles="w-[90%] mt-7"
                />

                <CustomButton
                title="Inscription"
                handlePress={()=> router.push('sign-up')}
                containerStyles="w-[90%] mt-4"
                />
                  
                
            </View>

        </ScrollView>
        
    </SafeAreaView>
  );
}

