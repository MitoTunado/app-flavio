import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export function LoginAdmin() { 
  return (
    <KeyboardAvoidingView style={styles.background}> 
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText2}><Text style={styles.titleText}>IF</Text>ICHAS - ADMIN</Text>  
          <Text style={styles.titleDescription}> Software inteligente de gestão de fichas.</Text>
        </View>
          <TextInput
          style={styles.input}
          placeholder="Matricula"
          autoCorrect={false}
      //nao salvar em canto algum ou salvar como local storage
          /> 

          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
      //nao salvar em canto algum ou salvar como local storage
          />

          <TouchableOpacity style={styles.btnForgotPassword}>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Fazer Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text>Criar Conta</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

