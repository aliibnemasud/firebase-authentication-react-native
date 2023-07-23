import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Dashboard = ({navigation}) => {
  const auth = getAuth();
  console.log(auth.currentUser.uid);

  const handleSignOut = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate('SignIn')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>Welcome {auth.currentUser.email} </Text>

      <TouchableOpacity
        onPress={handleSignOut}
        style={[style.button, { backgroundColor: "black", fontWeight: "bold" }]}
      >
        <Text style={{ textAlign: "center", color: "white" }}> Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    padding: 10,
    width: 100,
    textAlign: "center",
    backgroundColor: "green",
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
});

export default Dashboard;
