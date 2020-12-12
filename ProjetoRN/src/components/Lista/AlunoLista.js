import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const AlunoLista = ({data, detalhe}) => {

    const [aluno, setAluno] = useState(data);
    return (
        <TouchableOpacity style={estiloLista.areaItens} onPress={detalhe}>

            <LinearGradient start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} colors={['#161616', '#303030']} style={estiloLista.itens}>
                <Text style={estiloLista.itemNome}> {aluno.nome} </Text>
                <Text style={estiloLista.itemSubNome}> {aluno.sala} ({aluno.turma}) </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default AlunoLista; 