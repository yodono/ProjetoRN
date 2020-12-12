import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaItens: {   
        flex: 1,
        backgroundColor: '#92afd7',
    },
    itemNome: {   
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },    
    itemSubNome: {   
        fontSize: 18,
        textAlign: 'center',
    },    
    itemFoto: {   
        flex: 1,
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

export default estiloLista;
