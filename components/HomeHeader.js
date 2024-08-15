//Home header
import React from 'react';
import { View, Text } from 'react-native';

const HomeHeader = () => {

    return (
        <View>
            <View className="flex-row items-center justify-center pt-8 px-6 py-2 rounded-b-lg bg-blue-600">
                <Text className="text-3xl font-bold text-white">Portfolio</Text>
            </View>
        </View >
    );
};

export default HomeHeader;