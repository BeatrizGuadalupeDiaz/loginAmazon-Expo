import { View, Text,Image,StyleSheet, BackHandler, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import {strings, colors} from "../../../assets/index" 

export default function Login() {
  return (
    <View style={styles.containt}>
    <Image 
        style={styles.img}
        source={{uri: "https://th.bing.com/th/id/R.0bdd1f3928f36be177241b8f8574a299?rik=f1GLlasFjUCu%2fQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f10%2fAmazon-Logo.png&ehk=gLJu7Bd3zSqjAJ7OwoyQkQPaz6ofAdahYh91trMVyN0%3d&risl=&pid=ImgRaw&r=0"}}
    />
      <Text>{strings.login.title}</Text>
      <Text>{strings.login.titleEmail}</Text>
      <TextInput 
        placeholder="Email"
        style={styles.textInput}
      />
      <Text>{strings.login.titlePassword}</Text>
      <TextInput 
        placeholder="password"
        style={styles.textInput}
      />
      <Text
        style={styles.forgetPassword}
      >{strings.login.forgetPassword}</Text>
      <TouchableOpacity
        style={styles.btnLogin}
      >
        <Text>{strings.login.btn.btn_Login}</Text>
      </TouchableOpacity>
      <Text>
        {strings.login.informationAceptConditions}
      </Text>
      <Text>{strings.login.check_rememberme}</Text>
      <Text>{strings.login.areYouNew}</Text>
      <TouchableOpacity
        style={styles.btnCreateAccount}
      >
        <Text>{strings.login.btn.btn_CreateAccount}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    containt:{
        alignItems: "center"
    },
    img:{
        height: 80,
        width: 200,
        resizeMode: 'contain',
    },
    textInput:{
        borderWidth:1,
        padding: 5,
        width: 250
    },
    forgetPassword:{
        color: colors.blueLigthAmazon
    },
    btnLogin:{
        width: 100,
        height: 30,
        backgroundColor: colors.yellowAmazon,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    btnCreateAccount:{
        width: 150,
        height: 50,
        backgroundColor: colors.greyAmazon,
        color: colors.blackAmazon,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    }
})