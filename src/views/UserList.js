import React, {useContext} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Avatar, Button, Icon, ListItem} from 'react-native-elements';
import UsersContext from '../context/UsersContext';
import users from '../data/users';

export default (props) => {
  // definindo o contexto a ser usado, useContext usado paraacessar os dados providos pelo Provider
  const {state, dispatch} = useContext(UsersContext);

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            // dados da action
            type: 'deleteUser',
            // dados passado junto com a action
            payload: user,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          icon={<Icon name="delete" size={25} color="red" />}
          type="clear"
        />
      </>
    );
  }

  // função para renderizar os usuarios
  function getUserItem({item: user}) {
    // listando os itens
    return (
      <ListItem
        onPress={() => props.navigation.navigate('UserForm', user)}
        key={user.id}
        bottomDivider>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        // dados usados capturando do context api
        data={state.users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
