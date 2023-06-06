import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { homeStyles } from "./homeStyles";


export function Home() { 

  const navigation = useNavigation()

  function handleFrontend() { 
    navigation.navigate('FrontEnd');
  }

  function handleBackend() { 
    navigation.navigate('BackEnd'); 
  }

  function handleDatabase() {
    navigation.navigate('DataBase');
  }


  return ( 
    <View style={homeStyles.background}> 
      <View style={homeStyles.container}>
        <View>
            <Text style={homeStyles.titleText2}><Text style={homeStyles.titleText}>Guru</Text>Code</Text>  
            <Text style={homeStyles.titleDescription}>Software informativo relacionado a programção!</Text>
        </View>
        <View style={homeStyles.welcomeBack}> 
          <Text style={homeStyles.welcome}> Bem Vindo! </Text>
          <Text style={homeStyles.description}> Pressione um dos cards para mais informações! </Text>
        </View>

  
        <View style={homeStyles.box}>
          <TouchableOpacity style={homeStyles.btnSubmitAluno} onPress={handleFrontend}>
              <Text style={homeStyles.submitTextAluno}>FRONT-END</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.btnSubmitCantina} onPress={handleBackend}>
              <Text style={homeStyles.submitTextCantina}>BACK-END</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.btnSubmitAdmin} onPress={handleDatabase}>
              <Text style={homeStyles.submitTextAdmin}>DATABASE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}