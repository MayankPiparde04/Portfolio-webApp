// _layout from (app)
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HomeHeader from '../../components/HomeHeader'
// import Home from './home'

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name='home'
                options={{
                    header: () => <HomeHeader/>
                }}
            />
            
        </Stack>
        // <View>
        //     <Home/>
        // </View>
    )
}

export default _layout

const styles = StyleSheet.create({})