import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import {Button, Icon} from 'react-native-elements';
import {StatusBar} from 'react-native';
import {UsersProvider} from './context/UsersContext';

const Stack = createStackNavigator();

export default (props) => {
  return (
    <UsersProvider>
      {/* envolvendo a aplicaçaõ com usersProvider para obter a lista de usuarios para toda a aplicação */}
      <NavigationContainer>
        {/* configuração de navegação em pilha */}
        <StatusBar backgroundColor="#f4511e" barStyle="default" />
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{title: 'Formulário de Usuários'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};
