import { StyleSheet } from 'react-native';
const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
    },
    fundo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
    },
    borda: {    
      width: '80%',
      height: '90%',
      borderRadius: 10,
      justifyContent: 'space-evenly',
      alignItems: 'center',
   },
       header:{
       height: 40,
       width: '100%',
       backgroundColor: '#FFFFFF',
       flexDirection: 'row',
       alignItems: "flex-end",
       padding: 5,
       paddingLeft: 10,
   },
   fundo: {     
       width: '100%',
       height: '100%',
       justifyContent: 'space-evenly',
       paddingVertical: '55%',
       alignItems: 'center',
   },
   texto: {
       fontSize: 20,
       color: '#FFFFFF',
       fontWeight: 'bold',
       textAlign: "center",
       padding: 10
   },
       botaoBackground: {
       width: 140,
       height: 100,
       borderRadius: 10,
       overflow: 'hidden',
       justifyContent: 'flex-end',
       alignItems: 'center',
       padding: 10,
   },
   botaoBackgroundBorda: {
    margin: 1.5,
    width: 140,
    height: 100,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
   },
   botaoTexto: {
       fontSize: 18,
       color: '#FFFFFF',
    },
});

  export default estiloInicial;