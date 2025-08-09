import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const Notification = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      {/* Header */}
      <View className="flex-row items-center justify-between mt-4 px-4 py-3 border-b border-gray-100">
        <Text className="text-xl font-bold text-gray-900">Notifications</Text>
        <TouchableOpacity>
          <Feather name="settings" size={24} color="#657786" />
        </TouchableOpacity>
      </View>

      
    </SafeAreaView>
  );
};

export default Notification;
