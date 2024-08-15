import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AcademicsPage = () => {
    return (
        <ScrollView className="p-4">
            {/* 10th Grade */}
            <View className="bg-orange-200 p-4 rounded-lg shadow-md mb-4 flex-row items-center">
                <MaterialCommunityIcons name="school" size={30} color="#4a90e2" />
                <View className="ml-4 flex-1">
                    <Text className="text-xl font-semibold text-gray-700">10th Grade</Text>
                    <Text className="text-gray-600">Completed in 2020</Text>
                    <Text className="text-gray-600">Percentage: 94.3% (MPBSE)</Text>
                </View>
            </View>

            {/* 12th Grade */}
            <View className="bg-orange-200 p-4 rounded-lg shadow-md mb-4 flex-row items-center">
                <MaterialCommunityIcons name="school-outline" size={30} color="#4a90e2" />
                <View className="ml-4 flex-1">
                    <Text className="text-xl font-semibold text-gray-700">12th Grade</Text>
                    <Text className="text-gray-600">Completed in 2022</Text>
                    <Text className="text-gray-600">Percentage: 82.4% (MPBSE)</Text>
                    <Text className="text-gray-600">Subjects: Physics, Chemistry, Mathematics, Biology (PCMB)</Text>
                </View>
            </View>

            {/* Current Education */}
            <View className="bg-orange-200 p-4 rounded-lg shadow-md flex-row items-center">
                <MaterialCommunityIcons name="laptop" size={30} color="#4a90e2" />
                <View className="ml-4 flex-1">
                    <Text className="text-xl font-semibold text-gray-700">B.Tech in Computer Science and Engineering</Text>
                    <Text className="text-gray-600">Acropolis Institute of Technology and Research (AITR), Indore</Text>
                    <Text className="text-gray-600">Currently in 2nd Year (4th Semester)</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default AcademicsPage;
