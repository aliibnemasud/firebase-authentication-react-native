import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebaseConfig";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

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
          navigation.navigate("Dashboard");
        } catch (e) {
          console.error("Error adding document: ", e);
          setError(e?.message);
        }
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
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
    <View style={style.container}>
      <Text style={style.heading}>
        Firebase Authentication And data store in Firestore database
      </Text>

      {error && (
        <Text style={{ color: "red", fontWeight: "bold", padding: 10 }}>
          Error: {error}
        </Text>
      )}

      <TextInput
        style={style.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={style.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity onPress={handleSignUp} style={style.button}>
        <Text style={{ textAlign: "center", color: "white" }}> Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignIn")}
        style={[style.button, { backgroundColor: "white", fontWeight: "bold" }]}
      >
        <Text style={{ textAlign: "center", color: "green" }}> Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Player')} style={style.button}>
        <Text style={{ textAlign: "center", color: "white" }}> Play Music</Text>
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

export default SignUp;
