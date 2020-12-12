import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Item from '../../views/Item/Item';
import Aluno from '../../views/Aluno/Aluno';
import { MaterialIcons } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {
  Inicial: { name: 'home' },
  Perfil: { name: 'people' },
  Item: { name: 'book' }, 
  Aluno: { name: 'person'},
}

const RotasTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          style: {backgroundColor: '#FFFFFF'},
          activeTintColor: '#E1306C',
          showLabel: false,
        }
      }
      screenOptions={ ({route}) => ({
        tabBarIcon: ({color}) => {
            const {name} = icones[route.name];
            return <MaterialIcons name={name} size={30} color={color} />
          }
        })
      }
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          unmountOnBlur: true,
        }}
      />      
      <Tab.Screen 
      name="Aluno" 
      component={Aluno} 
      initialParams={{aluno: {}, operacao: 'adicionar'}} />
      <Tab.Screen 
        name="Item" 
        component={Item} 
        options={{
          unmountOnBlur: true,
        }}
      />  
    </Tab.Navigator>
  );
}

export default RotasTab;