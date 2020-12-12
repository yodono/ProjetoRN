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
                <LinearGradient start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} colors={['#161616', '#303030']} style={estiloInicial.borda}>

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{x: 1, y: 1 }}
                        colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}
                        style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        }}
                    >
                        <TouchableOpacity onPress={abrirAluno} style={estiloInicial.botaoBackgroundBorda}>
                            <ImageBackground source={require('../../../assets/imagens/btncolecao.jpg')} style={estiloInicial.botaoBackground}>
                                <Text style={estiloInicial.botaoTexto}>Aluno</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </LinearGradient>


                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{x: 1, y: 1 }}
                        colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}
                        style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        }}
                    >
                        <TouchableOpacity onPress={abrirPerfil} style={estiloInicial.botaoBackgroundBorda}>
                            <ImageBackground source={require('../../../assets/imagens/btnperfil.jpg')} style={estiloInicial.botaoBackground}>
                                <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </LinearGradient>
                </LinearGradient>
            </LinearGradient>
        </View>
    )
}
export default Inicial;