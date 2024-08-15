import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const ProjectsPage = () => {
    return (
        <ScrollView className="p-4">
            <View className="flex-row items-center mb-2 bg-indigo-200 rounded-lg p-4">
                <FontAwesome5 name="project-diagram" size={22} color="blue" />
                <View className="ml-4 flex-1">
                    <Text className="text-2xl text-neutral-900">Portfolio</Text>
                    <Text className="text-gray-800">
                        A portfolio app built with React Native and NativeWind/Tailwind CSS showcasing
                        my projects, skills, and academic achievements in a clean design.
                        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MayankPiparde04/Portfolio-webApp')}>
                            <Text className="text-teal-200"> see</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
            <View className="flex-row items-center mb-2 bg-indigo-200 rounded-lg p-4">
                <FontAwesome5 name="project-diagram" size={22} color="blue" />
                <View className="ml-4 flex-1">
                    <Text className="text-2xl text-neutral-900">Chatting App</Text>
                    <Text className="text-gray-800">
                        Developed a basic chatting application using React Native and Firebase Cloud Storage.
                        The app includes login/signup functionality, a home page, a chatting page, and profile pages.
                        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MayankPiparde04/Chat-webApp/')}>
                            <Text className="text-teal-200"> see</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
            <View className="flex-row items-center mb-2 bg-indigo-200 rounded-lg p-4">
                <FontAwesome5 name="project-diagram" size={22} color="blue" />
                <View className="ml-4 flex-1">
                    <Text className="text-2xl text-neutral-900">Study App</Text>
                    <Text className="text-gray-800">
                        Developed a basic Study application using React Native and Firebase Cloud Storage.
                        The app includes Chapters page and topic page along with video of each topics.
                        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/MayankPiparde04/Study-webApp')}>
                            <Text className="text-teal-200"> see</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default ProjectsPage;
