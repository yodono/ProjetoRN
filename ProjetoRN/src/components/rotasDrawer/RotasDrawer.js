import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerPersonalizado from './DrawerPersonalizado';
import Inicial from '../../views/Inicial/Inicial';
import Perfil from '../../views/Perfil/Perfil';
import Aluno from '../../views/Aluno/Aluno';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerPersonalizado}
    >

      <Drawer.Screen 
        name="Inicial" 
        component={Inicial}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name='home' size={size} color={color} />
          )
        }}
      />

      <Drawer.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="face-profile" size={size} color={color} />
          )
        }}      
      />

      <Drawer.Screen 
        name="Alunos" 
        component={Aluno}
        initialParams={{aluno: {}, operacao: 'adicionar'}}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="assignment-ind" size={size} color={color} />
          )
        }}      
      />

      <Drawer.Screen 
        name="Coleção" 
        component={Colecao}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome name="cubes" size={size} color={color} />
          )
        }}      
      />

      <Drawer.Screen 
        name="Item" 
        component={Item}
        initialParams={{item: {}, operacao: 'adicionar'}}
        options={{
          drawerIcon: ({color, size}) => (
            <Feather name="box" size={size} color={color} />
          )
        }}      
      />
      

    </Drawer.Navigator>
  );
}

export default RotasDrawer;