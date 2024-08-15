import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import profileImage from '../../assets/images/pic.jpg';

const ProfilePage = () => {
    return (
        <ScrollView className="p-4">
            <View className="items-center">
                <Image
                    source={profileImage}
                    style={{ width: 136, height: 136 }}
                    className="rounded-full shadow-lg my-4 border border-black"
                />
                <Text className="text-2xl font-semibold">Mayank Piparde</Text>
                <Text className="text-xl text-gray-600">Software Engineer</Text>
            </View>

            <View className="mt-8 w-full bg-slate-300 p-2 rounded-lg px-3">
                <Text className="text-2xl font-semibold mb-2">About Me</Text>
                <Text className="text-gray-600">
                    I am currently a second-year B.Tech student in Computer Science and Engineering at
                    Acropolis Institute of Technology and Research (AITR), Indore. I have a basic foundation
                    in programming languages, including C/C++ and Python. My primary focus is on app development
                    with React Native (expo go) and Tailwind CSS.
                </Text>
            </View>
        </ScrollView>
    );
}

export default ProfilePage;
