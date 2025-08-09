import "./global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";
import Notification from "./screens/Notification";
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function AppContent() {
  const insets = useSafeAreaInsets();

  function BottomTabOverview() {
    return (
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#1D9BF0", // Twitter blue
          tabBarInactiveTintColor: "#657786", // muted gray
          tabBarStyle: {
            backgroundColor: "#fff",
            borderRadius: 30,
            marginHorizontal: 14,
            marginBottom: 8 + insets.bottom,
            height: 50 + insets.bottom,
            paddingBottom: insets.bottom,
            borderTopWidth: 0,
            elevation: 4, // Android shadow
            position: "absolute",
          },
          tabBarLabelStyle: {
            fontSize: 10,
            paddingBottom: 2, // space between icon & label
          },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Nottification"
          component={Notification}
          options={{
            tabBarLabel: "Nottification",
            tabBarIcon: ({ color, size }) => (
              <Feather name="bell" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            tabBarLabel: "Message",
            tabBarIcon: ({ color, size }) => (
              <Feather name="mail" size={24} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="main"
          component={BottomTabOverview}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
