import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloPerfil from './estiloPerfil';
import AlunoLista from '../../components/Lista/AlunoLista';
import { MaterialIcons } from '@expo/vector-icons';
import { AlunoFB } from '../../firebase/alunoFB';

function Perfil({ navigation }) {

    const [perfil, setPerfil] = useState( [] );

    const alunoFb = new AlunoFB();

    useEffect(() => {
        alunoFb.pegarAluno()
        .orderBy('nome')
        .onSnapshot((query) => {
            const items = [];
            query.forEach((doc) => {
                items.push({...doc.data(), id: doc.id});
            });
            setPerfil(items);
        });
    },[]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Aluno', {aluno: {}, operacao: 'adicionar'})
    }
    
    const editar = (aluno) => {
        navigation.navigate('Aluno', {aluno: aluno, operacao: 'editar'})
    }
    
    
    return (
        <View style={estiloPerfil.container}>

            <View style={estiloPerfil.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                
                <Text style={estiloPerfil.texto}>Perfil dos alunos</Text>
                
                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <LinearGradient
                colors={['#FFF0F5', '#F8F8FF']}
                style={estiloPerfil.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <FlatList 
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    data={perfil}
                    renderItem={ ({item}) => <AlunoLista data={item} detalhe={() => editar(item)} />}
                />
            </LinearGradient>
        </View>
    )
}

export default Perfil;
