import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloItem from './estiloItem';
import { LinearGradient } from 'expo-linear-gradient';

function Item({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <LinearGradient
                colors={['#FFF0F5', '#F8F8FF']}
                style={estiloItem.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}>Item</Text>

                <TouchableOpacity onPress={voltar}>
                    <LinearGradient  style={estiloItem.botaoContainer} start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}>
                        <Text style={estiloItem.botaoTexto}>Voltar</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </LinearGradient>
    )
}

export default Item