import { 
  Alert,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    }

    axios.post("http://localhost:5000/register", user)
    .then((res) => {
      console.log(res);
      Alert.alert(
        "Register successful",
        "You have been registered successfully"
      );

      setName("");
      setEmail("");
      setImage("");
      setPassword("");
    })
    .catch((error) => {
      Alert.alert(
        "Registration error",
        "An error occurred while registering"
      )
      console.log('Registration failed', error);
    })
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 100 }}>
          <Text style={styles.textTitle}>Register</Text>
          <Text style={styles.text}>Sign In to your account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              value={name}
              onChangeText={(e) => setName(e)}
              placeholderTextColor={'gray'}
              style={styles.textInput}
              placeholder="Nome"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(e) => setEmail(e)}
              placeholderTextColor={'gray'}
              style={styles.textInput}
              placeholder="E-mail"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={(e) => setPassword(e)}
              secureTextEntry={true}
              placeholderTextColor={'gray'}
              style={styles.textInput}
              placeholder="Password"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.label}>Image</Text>
            <TextInput
              value={image}
              onChangeText={(e) => setImage(e)}
              placeholderTextColor={'gray'}
              style={styles.textInput}
              placeholder="Image"
            />
          </View>

        </View>

        <Pressable 
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 20 }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "gray",
              fontSize: 16,
            }}
          >
            Register to your account? Login
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  textTitle: {
    color: '#4a55a2',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 15,
    color: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black'
  },
  textInput: {
    fontSize: 18,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 300,
    padding: 10,
  },
  button: {
    width: 200,
    backgroundColor: "#4a55a2",
    padding: 15,
    marginTop: 50,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
