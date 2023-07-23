import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Dashboard = ({ navigation }) => {
  const [user, setUserData] = useState({});
  const auth = getAuth();

  const getData = async () => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserData(doc.data());
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSignOut = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.navigate("SignIn");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={style.container}>
      <Text style={style.heading}>
        Welcome{" "}
        <Text style={{ color: "green", fontWeight: "bold" }}>{user?.name}</Text>{" "}
      </Text>

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
