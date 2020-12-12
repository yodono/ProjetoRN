import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    const abrirAluno = () => {
        navigation.navigate('Aluno')
    }
    
    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="ellipsis1" size={27} color="black" />
                </TouchableOpacity>
            </View>

            <LinearGradient
                colors={['#FFF0F5', '#F8F8FF']}
                style={estiloInicial.fundo}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={estiloInicial.borda}>
                    <TouchableOpacity onPress={abrirAluno}>
                        <ImageBackground source={require('../../../assets/imagens/btncolecao.jpg')} style={estiloInicial.botaoBackground}>
                            <Text style={estiloInicial.botaoTexto}>Aluno</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirPerfil}>
                        <ImageBackground source={require('../../../assets/imagens/btnperfil.jpg')} style={estiloInicial.botaoBackground}>
                            <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}
export default Inicial;