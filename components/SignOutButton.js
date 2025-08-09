import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import useSignOut from "../hooks/useSignOut";

const SignOutButton = () => {
  const { confirmSignOut } = useSignOut();
  return (
    <TouchableOpacity onPress={confirmSignOut}>
      <Feather name="log-out" size={24} color={"#E0245E"} />
    </TouchableOpacity>
  );
};

export default SignOutButton;
