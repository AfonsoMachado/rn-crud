import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        // chamado quando o usuario digita, vai sempre substituindo o nome o ...user pega todos os atributos de usuario, e sobrescreve o atirubuto nome
        onChangeText={(name) => setUser({...user, name})}
        placeholder="Informe o Nome"
        value={user.name}
        style={style.input}
      />
      <Text>E-mail</Text>
      <TextInput
        onChangeText={(email) => setUser({...user, email})}
        placeholder="Informe o E-mail"
        value={user.email}
        style={style.input}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        onChangeText={(avatarUrl) => setUser({...user, avatarUrl})}
        placeholder="Informe a URL do Avatar"
        value={user.avatarUrl}
        style={style.input}
      />
      <Button
        title="Salvar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
  },
});
