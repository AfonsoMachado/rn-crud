import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import users from '../data/users';

export default (props) => {
  // função para renderizar os usuarios
  function getUserItem({item: user}) {
    // listando os itens
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        // dados usados
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
