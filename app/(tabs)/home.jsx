import { FlatList, StyleSheet, Text, View , Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../components/SearchInput'
import Assurence from '../components/Assurence'
import EmptyState from '../components/EmptyState'
const home = () => {

    const [Refreshing, setRefreshing] = useState(false)
    const onRefresh = async ()=>{
        setRefreshing(true);
        setRefreshing(false);
    }
  return (
    
    <SafeAreaView className="bg-primary h-full" >
      <FlatList 
        //data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data={[]}
        keyExtractor={(item)=> item.$id}
        renderItem={({item})=>(
            <Text className=" text-3xl text-white" >{item.id}</Text>
        )}
        ListHeaderComponent={() =>(
            <View className="my-6 px-4 space-y-6">
                <View className="justify-between items-start flex-row mb-6">
                    <View>
                        <Text className="font-pmedium text-sm text-gray-100">
                            Re-Bonjour 
                         </Text>
                        <Text className="text-2xl font-psemibold text-white">
                            Meryoumitah
                        </Text>
                    </View>
                    <View className="mt-1.5">
                        <Image
                         source = {images.logo}
                         className="w-20 h-10"
                         resizeMode='contain'
                        />
                    </View>
                </View>

                <SearchInput/>

                <View className="w-full flex-1 pt-5 pb-8">
                    <Text className="text-gray-100 text-lg font-pregular mb-3">
                        Nos Assurences
                    </Text>

                    <Assurence posts = {[{id:'1' , text : '' , image: images.gat}, {id: '2', text : '' , image: images.star},{id: '3', text : '' , image:images.taa}] ?? []}/>

                </View>

            </View>
        )}

        ListEmptyComponent={() => (
            <EmptyState
              title="Aucun constat jusqu'à present "
              subtitle="Ajouter un !"
            />
          )}

        refreshControl={<RefreshControl Refreshing={Refreshing} onRefresh={onRefresh}/>}
      />
      
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})