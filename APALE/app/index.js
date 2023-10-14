import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    color: "white",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 5,
    width: "100%",
 
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFFFFF",

  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
});

export default function Home() {

    const { control, handleSubmit, formState: { errors, isDirty } } = useForm({
        defaultValues: {
          email: '',
          password: ''
        }

      });
    
    
      const onSubmit = data => {
        console.log(data)
      };
  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/828/18/HD-wallpaper-here-kitty-kitty-background-black-cat-feline-pet-pink.jpg' }}
      style={myStyle.container}
    >
      <View style={myStyle.container}>
        <Text style={myStyle.headerText}>Login Account</Text>
        
        <View style={myStyle.inputContainer}>
          <Text style={myStyle.labelText}>Email:</Text>
          <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=" Enter your Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={myStyle.input}
            keyboardType="email-address"
            
            
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

          
        </View>
        <View style={myStyle.inputContainer}>
          <Text style={myStyle.labelText}>Password:</Text>
          
          <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=" Enter password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={myStyle.input}
            keyboardType="password"
            
            
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}

        </View>
        <TouchableOpacity style={myStyle.button} onPress ={handleSubmit(onSubmit)} >
          <Text style={myStyle.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}