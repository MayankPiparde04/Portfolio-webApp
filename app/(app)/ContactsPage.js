import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

const ContactsPage = () => {
    return (
        <ScrollView className="p-4">
            {/* Contact */}
            <View className="my-2 w-full">
                <Text className="text-2xl font-semibold mb-2">Contact</Text>
                <View className="flex-row justify-around">
                    <View className="px-8 py-2">
                        <View className="flex-row items-center mb-2">
                            <Entypo name="mail" size={20} color="blue" />
                            <TouchableOpacity onPress={() => Linking.openURL('mailto:mayankpiparde20@gmail.com')}>
                                <Text className="ml-2 text-blue-500">Email</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row items-center mb-2">
                            <AntDesign name="github" size={20} color="blue" />
                            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MayankPiparde04/')}>
                                <Text className="ml-2 text-blue-500">GitHub</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row items-center mb-2">
                            <FontAwesome5 name="hackerrank" size={20} color="blue" />
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.hackerrank.com/profile/mayankpiparde20/')}>
                                <Text className="ml-2 text-blue-500">HackerRank</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="px-8 py-2">
                        <View className="flex-row items-center mb-2">
                            <AntDesign name="linkedin-square" size={20} color="blue" />
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/mayankpiparde/')}>
                                <Text className="ml-2 text-blue-500">LinkedIn</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row items-center mb-2">
                            <AntDesign name="instagram" size={20} color="blue" />
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/_mayank_piparde_04_/')}>
                                <Text className="ml-2 text-blue-500">Instagram</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View className="flex-row items-center mb-2">
                            <AntDesign name="twitter" size={20} color="blue" />
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com/mayankpiparde/')}>
                                <Text className="ml-2 text-blue-500">Twitter</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </View>
            
        </ScrollView>
    );
}

export default ContactsPage;
