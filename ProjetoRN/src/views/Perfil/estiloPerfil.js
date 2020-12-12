import { StyleSheet } from 'react-native';
const estiloPerfil = StyleSheet.create({
   container: {   
      flex: 1,
   },
   header:{
       height: 40,
       width: '100%',
       backgroundColor: '#FFFFFF',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'stretch',
       padding: 5,
   },
   fundo: {     
      width: '100%',
      height: '100%',
      alignItems: 'center',
   },
   texto: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      textAlign: "center",
   },
      botaoBackground: {
      width: 140,
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: "#14417b",
   },
   botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
   }
});

export default estiloPerfil;