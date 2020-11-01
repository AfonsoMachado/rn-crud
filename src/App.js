import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <NavigationContainer>
      {/* configuração de navegação em pilha */}
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserForm" component={UserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
