import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot, Stack} from 'expo-router'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
  
            <Stack.Screen name='index' options={{headerShown:false}}/>
       
        
    </Stack>
  )
}

export default RootLayout

// const styles = StyleSheet.create({
//     container:{
//         display:"flex",
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center'
//     }
// })