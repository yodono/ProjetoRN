import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import estiloAluno from './estiloAluno';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AlunoFB } from '../../firebase/alunoFB';

function Aluno({ navigation, route }) {

    const [aluno, setAluno] = useState({});
    const {operacao, setOperacao} = route.params;

    const alunoFb = new AlunoFB();

    useEffect(() => {
            setAluno(route.params.aluno);
    }, [route.params.aluno]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    const salvar = (aluno) => {
        operacao == 'adicionar' ? alunoFb.adicionarAluno(aluno) : alunoFb.editarAluno(aluno);
        voltar();
     }

    const remover = (aluno) => { 
        alunoFb.removerAluno(aluno);
        voltar();
    }
    
    return (
        <View style={estiloAluno.container}>
            <View style={estiloAluno.header}>

                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="black"/>
                </TouchableOpacity>
                <Text style={estiloAluno.textoHeader}>Registro de alunos</Text>
                <Text></Text>
            </View>

            <LinearGradient
                colors={['#FFF0F5', '#F8F8FF']}
                style={estiloAluno.formularioContainer}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <LinearGradient start={{ x: 0, y: 0 }} end={{x: 1, y: 1 }} colors={['#161616', '#303030']} style={estiloAluno.borda}>
                <View style={estiloAluno.campoContainer}>
                    <FontAwesome5 name="book" size={26} color="#F8F8FF"/>
                    <TextInput
                        style={estiloAluno.campo}
                        placeholder="Nome"
                        placeholderTextColor="#F8F8FF"
                        onChangeText={nome => setAluno({...aluno, nome})}
                        value={aluno.nome}
                    />
                </View>

                <View style={estiloAluno.campoContainer}>
                    <FontAwesome5 name="book-reader" size={26} color="#F8F8FF"/>
                    <TextInput
                        style={estiloAluno.campo}
                        placeholder="Sala"
                        placeholderTextColor="#F8F8FF"
                        onChangeText={sala => setAluno({...aluno, sala})}
                        value={aluno.sala}
                    />
                </View>

                <View style={estiloAluno.campoContainer}>
                    <FontAwesome5 name="calendar-alt" size={26} color="#F8F8FF"/>
                    <TextInput
                        style={estiloAluno.campo}
                        placeholder="Turma"
                        placeholderTextColor="#F8F8FF"
                        keyboardType="numeric"
                        maxLength={4}
                        onChangeText={turma => setAluno({...aluno, turma})}
                        value={aluno.turma}
                    />
                </View>

                <View style={estiloAluno.botoesContainer}>

                    <TouchableOpacity onPress={() => salvar(aluno)} style={estiloAluno.botaoContainer}>
                        <LinearGradient colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']} style={estiloAluno.botao}>
                            <MaterialIcons name="save" size={28} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => remover(aluno)} style={estiloAluno.botaoContainer}>
                        <LinearGradient colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']} style={estiloAluno.botao}>
                            <MaterialIcons name="delete" size={28} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </LinearGradient>
            </LinearGradient>
        </View>
    )
}

export default Aluno;
