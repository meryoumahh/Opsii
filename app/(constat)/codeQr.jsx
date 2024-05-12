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
                    source ={images.qr}
                    className="w-[200px] h-[200px]"
                    resizeMode="contain"
                />
                
                <View className="relative mt-10">
                    <Text className="text-3xl text-white
                            font-bold text-center">Scanner le CODE s'il vous plait! 
                        
                    </Text>
                </View>
                <Text className="text-sm font-regular text-gray-100 mt-7 text-center">En clickant suivant vous pouvez commancer remplir les donner de l'accident</Text>
                

                <CustomButton
                title="Suivant"
                handlePress={()=> router.push('/info-acc')}
                containerStyles="w-[90%] mt-4"
                />
                  
                
            </View>

        </ScrollView>
        
    </SafeAreaView>
  );
}

