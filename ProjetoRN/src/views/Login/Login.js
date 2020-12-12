import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import estiloLogin from './estiloLogin';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            <View style={estiloLogin.borda}>

            <ImageBackground source={require('../../../assets/imagens/background.jpg')} style={estiloLogin.fundo}>

            <View style={estiloLogin.campoContainer}>
                <MaterialIcons name="person" size={24} color="#161616" /> 
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />
            </View>

            <View style={estiloLogin.campoContainer}>            
                <MaterialIcons name="vpn-key" size={24} color="#161616" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />
            </View>

            <TouchableOpacity onPress={entrar}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']} style={estiloLogin.botaoLinearGradient}>
                    <MaterialIcons name="send" size={24} color="white" />
                    <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                </LinearGradient>
            </TouchableOpacity>

            </ImageBackground>
            </View>
        </View>
    )
}

export default Login;