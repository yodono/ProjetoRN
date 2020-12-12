import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaItens: {   
        flex: 1,
    },
    itens:{
        marginHorizontal: '15%',
        borderRadius: 10,
        margin: 25,
    },
    itemNome: {   
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
        color: 'white',
    },    
    itemSubNome: {   
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15,
        color: 'white',
    },    
    itemFoto: {   
        flex: 1,
        height: 300,
        margin: 20,
    },
});

export default estiloLista;
