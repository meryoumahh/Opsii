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
                            font-bold text-center">Veuillez vous choisir une mode pour que le 2ème conducteur remplisse le constat !
                            
                    </Text>
                </View>
                <Text className="text-sm font-regular text-gray-100 mt-7 text-center">Économisez votre temps et remplissez votre constat accient en quelques étapes grace à l'option 1&2</Text>
                <CustomButton
                title="Partage par code QR"
                handlePress={() => router.push('codeQr') }
                containerStyles="w-[90%] mt-7"
                />

                <CustomButton
                title="Envoie par email"
                handlePress={()=> router.push('envMail')}
                containerStyles="w-[90%] mt-4"
                />
                <CustomButton
                title="Remplissage Manuelle Meme téléphone "
                handlePress={() => router.push('info-acc') }
                containerStyles="w-[90%] mt-4"
                />
                  
                
            </View>

        </ScrollView>
        
    </SafeAreaView>
  );
}

