import { 
  KeyboardAvoidingView,
  Pressable,
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={{ marginTop: 100 }}>
          <Text style={styles.textTitle}>Login</Text>
          <Text style={styles.text}>Sign In to your account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={styles.label}>Email</Text>
            <TextInput  
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
              placeholderTextColor={'gray'}
              placeholder='E-mail'/>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.label}>Password</Text>
            <TextInput  
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.textInput}
              placeholderTextColor={"gray"} 
              placeholder='Password'/>
          </View>
        </View>


        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable 
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16}}>
            Don't have an account? Register
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

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
})