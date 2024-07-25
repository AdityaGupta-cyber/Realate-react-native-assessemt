import { Link,SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View,Image,  TouchableOpacity ,ScrollView} from 'react-native';
import { useFonts} from "expo-font"
import { useEffect, useState } from 'react';
import { data } from '../assets/data/data';
import images from '../assets/images/images'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [count,setCount] = useState(0)
  const [current,setCurrent]= useState(data[count])


  const[fontloaded,error] = useFonts({
    "LibreBaskerville":require("../assets/fonts/LibreBaskerville-Regular.ttf"),
    'LibreBaskervilleBold':require("../assets/fonts/LibreBaskerville-Bold.ttf"),
  })
  const handlePress = () => {
    if(count < data.length-1 && count>=0) {
      setCurrent(data[count+1]);
      setCount(count+1);
    }
  };
  const handleBack = () => {
    if(count>0) {
      setCurrent(data[count-1]);
      setCount(count-1);
    }
  };


  useEffect(()=>{
    if(error) throw error
    if (fontloaded) SplashScreen.hideAsync();
  },[fontloaded,error])
  return (
   fontloaded ? <SafeAreaView className='relative bg-secondary'  >
    <Image source={require('../assets/mesh.png')} resizeMode="cover" className=" absolute h-full opacity-10" ></Image>
        <ScrollView contentContainerStyle={{height:'100%'}} >
          <StatusBar  style='light'/>
   <View className="relative bg-secondary h-full w-full flex flex-1 items-center justify-center">

   <View className='absolute h-fit left-4 top-6 z-50'>
   <TouchableOpacity className='' onPress={handleBack}>
          <Ionicons  className='' name="chevron-back" size={36} color="white" />
    </TouchableOpacity>
   </View>
   <Image source={require('../assets/mesh.png')} resizeMode="cover" className="absolute w-full h-full opacity-10" ></Image>

<View className='flex items-center w-full gap-7 '>

<View className={`flex items-center h-60 w-32 ${count == 0 ? "rotate-12" :"rotate-0"}`}>
<Image  source={images[count] }  style={styles.image}/>
</View>
<Text className='text-primary text-[29px] ' style={{fontFamily:'LibreBaskerville'}}>
{current.title}
</Text>

<View className='w-full h-fit flex items-center '>
<Text className='flex items-center text-center w-[70%] text-white opacity-60'> {current.text1} </Text>
<Text className='flex items-center text-center w-[70%] text-white opacity-60' >{current.text2  }</Text>
</View>

<View className='w-full h-fit flex flex-row gap-[3%] items-cente justify-center'>
 <View className={`flex w-[15%] h-[4px] ${count==0 ? "bg-primary":'bg-[#343434]'}`}></View>
 <View className={`flex w-[15%] h-[4px] ${count==1 ? "bg-primary":'bg-[#343434]'}`}></View>
 <View className={`flex w-[15%] h-[4px] ${count==2 ? "bg-primary":'bg-[#343434]'}`}></View>
 <View className={`flex w-[15%] h-[4px] ${count==3 ? "bg-primary":'bg-[#343434]'}`}></View>
</View>

 <View className="w-[70%] h-fit  mb-16 pt-10 flex items-center ">
   <TouchableOpacity className="w-full px-3 py-3 flex items-center bg-primary justify-center rounded-lg" onPress={handlePress}>
     <Text className='text-xl font-bold'>{count< data.length - 1 ? "Next" :"Done"}</Text>
 </TouchableOpacity>
 </View>

</View>
</View>
</ScrollView>
</SafeAreaView> : <View className='flex-1 items-center justify-center'>
  <Text className='text-5xl text-primary'>
    Loading..
  </Text>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    aspectRatio: 1.5, 
    resizeMode: 'contain',
  }
  
});
