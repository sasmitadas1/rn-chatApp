import { useCallback } from "react";
import { useClerk } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

const useSignOut = () => {
  const navigation = useNavigation();
  const { signOut } = useClerk();

  const performSignOut = useCallback(async () => {
    try {
      await signOut();
      navigation.replace("login"); // Redirect to login
    } catch (error) {
      console.error("Logout failed:", error);
      Alert.alert("Error", "Something went wrong while logging out.");
    }
  }, [navigation, signOut]);

  const confirmSignOut = useCallback(() => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: performSignOut },
    ]);
  }, [performSignOut]);

  return { confirmSignOut };
};

export default useSignOut;
