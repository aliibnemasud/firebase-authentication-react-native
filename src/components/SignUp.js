import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        try {
          const docRef = await addDoc(collection(db, "users"), {
            name: name,
            email: user?.email,
            uid: user.uid,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleAddData = async () => {
    console.log("clicked");

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        Firebase Authentication And data store in Firestore database
      </Text>
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 20,
        }}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 20,
        }}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 20,
        }}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Text
        onPress={handleSignUp}
        style={{
          padding: 10,
          width: "50%",
          textAlign: "center",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Sign Up
      </Text>
    </View>
  );
};

export default SignUp;
