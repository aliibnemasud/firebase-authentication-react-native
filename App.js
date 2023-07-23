import { View } from "react-native";
import SignUp from "./src/components/SignUp";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SignUp />
    </View>
  );
}
