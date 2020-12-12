import { StyleSheet } from 'react-native';

const estiloAluno = StyleSheet.create({
   container: {   
      flex: 1,  
   },
   borda: {   
      backgroundColor: '#161616',  
      width: '80%',
      height: '85%',
      borderRadius: 10,
      justifyContent: 'space-evenly',
      alignItems: 'center',
   },
   header: {   
      height: 40,
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
      padding: 5,
   },
   formularioContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
   },
    texto: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
   },
   textoHeader: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
   },
   campoContainer: {
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
   },
   campoContainerDescricao: {
      flexDirection: 'row',
      padding: 5, 
      paddingLeft: 45, 
      paddingRight: 40, 
      margin: 5,
   },
   campo: {
      fontSize: 18,
      color: 'black',
      marginLeft: 40,    
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: '#F8F8FF',
   },
   campoDescricao:{
       width: '90%',
       height: 100, 
       fontSize: 18,
       color: '#FFFFFF',
       backgroundColor: '#4c669f',
       marginLeft: 15,
       padding: 10, 
       borderWidth: 1, 
       borderColor: '#192f6a',
       borderRadius: 5,
       textAlignVertical: 'top',
   },
   campoDescricaoScroll: {
       width: '100%',
   },
   botoesContainer:{
       flexDirection: 'row',
       justifyContent: 'center',
       marginTop: 50,
   },
    botaoContainer: {
        alignItems: 'center',
        padding: 5,
    },
    botao:{
        width: 50,
        height: 50,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: "center",
        padding: 10,
    },
});

export default estiloAluno;