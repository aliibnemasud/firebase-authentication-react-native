import SignUp from "./src/components/SignUp";
import SignIn from "./src/components/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./src/components/Dashboard";
import PlayMusic from "./src/music/PlayMusic";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Music" component={PlayMusic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
