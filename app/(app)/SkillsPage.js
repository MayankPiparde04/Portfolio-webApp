import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

const SkillsPage = () => {
    return (
        <ScrollView className="p-4">
            <View className="flex-row justify-between">
                <View className="flex-1 mx-1 w-full">
                    {[
                        'C/C++',
                        'Python',
                        'React Native',
                        'Firebase Cloud Storage',
                    ].map((skill, index) => (
                        <View key={index} className="flex-row items-center mb-2 bg-teal-300 p-2 rounded-lg">
                            <SimpleLineIcons name="badge" size={26} color="black" className="p-1" />
                            <View className="h-20 flex-1 items-start justify-center">
                                <Text className="text-xl text-gray-800 pl-2 font-semibold">{skill}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View className="flex-1 mx-1 w-full">
                    {[
                        'NativeWind/Tailwind',
                        'HTML, CSS',
                        'JavaScript',
                    ].map((skill, index) => (
                        <View key={index} className="flex-row items-center mb-2 bg-teal-300 p-2 rounded-lg">
                            <SimpleLineIcons name="badge" size={26} color="black" className="p-1"/>
                            <View className="h-20 flex-1 items-start justify-center">
                                <Text className="text-xl text-gray-800 pl-2 font-semibold">{skill}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

export default SkillsPage;
