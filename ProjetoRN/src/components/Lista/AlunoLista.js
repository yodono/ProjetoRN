import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const AlunoLista = ({data, detalhe}) => {

    const [aluno, setAluno] = useState(data);
    return (
        <TouchableOpacity style={estiloLista.areaItens} onPress={detalhe}>

            <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
                <Text style={estiloLista.itemNome}> {aluno.nome} </Text>
            </LinearGradient>
            <Text style={estiloLista.itemSubNome}> {aluno.sala} ({aluno.turma}) </Text>
            
            <LinearGradient colors={['#92afd7', '#92afd7', '#14417b']}>
                <Text> </Text>
                {/*(<Image 
                    resizeMode='contain'
                    style={estiloLista.itemFoto}
                    source={item.foto}
                />*/}
            </LinearGradient>

        </TouchableOpacity>
    );
}

export default AlunoLista; 