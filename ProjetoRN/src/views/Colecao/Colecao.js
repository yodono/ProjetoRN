import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState([
        {
            id: '1',
            titulo: 'Riba-II',
            descricao: 'O Riba-II foi criado para auxiliar pessoas idosas ou deficientes. Ele pode carregar uma pessoa de 80 quilos e é capaz de colocá-la sentada ou ajudá-la a levantar.',
            desenvolvedora: 'Instituto Riken',
            anoPublicacao: '2011',
            foto: require('../../../assets/imagens/ribbaII.png'),
        },
        {
            id: '2',
            titulo: 'Asimo',
            descricao: 'O Asimo pertence à classe dos robôs humanóides – ou seja, que se assemelham à forma humana. Ele tem um banco de dados extenso, que permite a comunicação com seres-humanos. Ele também consegue desempenhar funções como pegar objetos, correr, abrir garrafas, etc. O aperfeiçoamento desse robô tende a utilizá-lo para ajudar as pessoas em tarefas domésticas.',
            desenvolvedora: 'Honda',
            anoPublicacao: '2007',
            foto: require('../../../assets/imagens/asimo.png'),
        },
        {
            id: '3',
            titulo: 'Pepper',
            descricao: 'O robô Pepper foi implantado recentemente em uma agência bancária em Taiwan para distrair os clientes enquanto eles esperam o atendimento. O objetivo é tornar a espera menos entediante e introduzir os serviços do banco.',
            desenvolvedora: 'SoftBank Robotics',
            anoPublicacao: '2015',
            foto: require('../../../assets/imagens/pepper.png'),
        },
        {
            id: '4',
            titulo: 'Kirobo',
            descricao: 'Kirobo é um mini robô desenvolvido pela Toyota para fazer companhia ao motorista em momentos de solidão. Também nutrido de um grande banco de dados, ele é capaz de estabelecer conversas duradouras com o motorista. Ele não faz nada muito além de conversar, mas pode ser um salva-vidas em viagens longas e cansativas.',
            desenvolvedora: 'Toyota',
            anoPublicacao: '2015',
            foto: require('../../../assets/imagens/kirobo.png'),
        },
    ]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    return (
        <View style={estiloColecao.container}>
                    <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name='arrow-back' size={24} color='white'/>
                </TouchableOpacity>

                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name='add' size={24} color='white' /> 
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <Lista data={item} />}
            />

        </View>
            );
}

export default Colecao;