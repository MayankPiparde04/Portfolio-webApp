import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import profileImage from '../../assets/images/pic.jpg';
import { useRouter } from 'expo-router';
import ContactsPage from './ContactsPage';

export default function Layout() {
  const router = useRouter();

  const gotoProfile = () => {
    // console.log("Navigating to ProfilePage");
    router.push('ProfilePage');
  };

  const gotoAcademics = () => {
    // console.log("Navigating to AcademicsPage");
    router.push('AcademicsPage');
  };

  const gotoSkills = () => {
    // console.log("Navigating to SkillsPage");
    router.push('SkillsPage');
  };

  const gotoProjects = () => {
    // console.log("Navigating to ProjectsPage");
    router.push('ProjectsPage');
  };

  return (
    <ScrollView className="">
      {/* Profile */}
      <View className="bg-gray-100 p-4 py-2">
        <View className="mb-1">
          <TouchableOpacity onPress={gotoProfile}>
            <View className="flex-row items-center p-2 mt-2 bg-cyan-400 border rounded-xl justify-evenly">
              <View className="p-1">
                <Image
                  source={profileImage}
                  style={{ width: 74, height: 74 }}
                  className="rounded-full shadow-lg border border-black"
                />
              </View>
              <View className="flex-col items-center px-2 justify-start">
                <Text className="text-3xl text-neutral-800 font-semibold">Mayank Piparde</Text>
                <Text className="text-xl text-neutral-600">Software Engineer</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Academic */}
          <View className="mt-6">
            <TouchableOpacity onPress={gotoAcademics}>
              <View className="my-2 w-full bg-green-300 items-center rounded-lg">
                <Text className="text-3xl p-4 font-semibold text-neutral-800">Academic</Text>
              </View>
            </TouchableOpacity>

            {/* Skills */}
            <TouchableOpacity onPress={gotoSkills}>
              <View className="my-2 w-full bg-green-300 items-center rounded-lg">
                <Text className="text-3xl p-4 font-semibold text-neutral-800">Skills</Text>
              </View>
            </TouchableOpacity>

            {/* Projects */}
            <TouchableOpacity onPress={gotoProjects}>
              <View className="my-2 w-full bg-green-300 items-center rounded-lg">
                <Text className="text-3xl p-4 font-semibold text-neutral-800">Projects</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ContactsPage />
        </View>
        <View className="bg-slate-300 rounded-full w-full py-4 my-4 shadow-md justify-end">
          <Text className="text-center text-gray-600">&copy; 2024 Mayank Piparde. All rights reserved.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
