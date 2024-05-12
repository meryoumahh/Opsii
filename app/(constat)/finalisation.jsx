import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View , Image} from 'react-native';
import { Redirect , router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import 'nativewind';
import CustomButton from '.././components/CustomButton';


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
                            font-bold text-center">Contrat valider envoyer au assureur une copie est envoyée via email
                            
                            
                    </Text>
                </View>
                
                

                <CustomButton
                title="Terminer"
                handlePress={()=> router.push('/home')}
                containerStyles="w-[90%] mt-4"
                />
                  
                
            </View>

        </ScrollView>
        
    </SafeAreaView>
  );
}

