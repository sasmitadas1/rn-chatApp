import { ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useSocialAuth } from "../hooks/useSocialAuth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const { handleSocialAuth, isLoading } = useSocialAuth();

  const navigation = useNavigation();

  const handleLogin = (provider) => {
    handleSocialAuth(provider, () => {
      // ✅ Redirect to home after login
      navigation.replace("main");
    });
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          <View className="item-center">
            <Image
              source={require("../assets/auth2.png")}
              className="size-96"
              resizeMode="contain"
            />
          </View>
          <View className="flex-col gap-2">
            <TouchableOpacity
              className="flex-row item-center justify-center bg-white border
            border-gray-300 rounded-full  py-3 px-6"
              onPress={() => {
                handleLogin("oauth_google");
              }}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <View className="flex-row items-center justify-center">
                  <Image
                    source={require("../assets/google.png")}
                    className="size-8 mr-3"
                    resizeMode="contain"
                  />
                  <Text className="text-black font-medium text-base">
                    Continue with Google
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row item-center justify-center bg-white border
            border-gray-300 rounded-full  py-3 px-6"
              onPress={() => {
                handleLogin("oauth_apple");
              }}
              disabled={isLoading}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <View className="flex-row items-center justify-center">
                  <Image
                    source={require("../assets/apple.png")}
                    className="size-8 mr-3"
                    resizeMode="contain"
                  />
                  <Text className="text-black font-medium text-base">
                    Continue with Apple
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          {/* Terms and Privacy */}
          <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
            By signing up, you agree to our{" "}
            <Text className="text-blue-500">Terms</Text>
            {", "}
            <Text className="text-blue-500">Privacy Policy</Text>
            {", and "}
            <Text className="text-blue-500">Cookie Use</Text>.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
