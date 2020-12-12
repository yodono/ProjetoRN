import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    const abrirColecao = () => {
        navigation.navigate('Aluno')
    }
    
    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name='menu-fold' size={24} color='white' />
                </TouchableOpacity>
            </View>
            <ImageBackground source={require('../../../assets/imagens/background.jpg')} style={estiloInicial.fundo}>
                    <TouchableOpacity onPress={abrirColecao}>
                    <ImageBackground source={require('../../../assets/imagens/btncolecao.jpg')} style={estiloInicial.botaoBackground}>
                        <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                    </ImageBackground>
                    </TouchableOpacity>
                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirPerfil}>
                    <ImageBackground source={require('../../../assets/imagens/btnperfil.jpg')} style={estiloInicial.botaoBackground}>
                    <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
export default Inicial;