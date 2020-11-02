import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const initialState = {users};
const UsersContext = createContext({});

const actions = {
  createUser(state, action) {
    const user = action.payload;
    user.id = Math.random();
    return {
      // pegando todos os atributos do estado atual
      ...state,
      // lista anterior mais o usuario atual
      users: [...state.users, user],
    };
  },
  updateUser(state, action) {
    const updated = action.payload;
    return {
      ...state,
      users: state.users.map((u) => (u.id === updated.id ? updated : u)),
    };
  },
  deleteUser(state, action) {
    const user = action.payload;
    return {
      // para captuaar todos os atributos existentes no state, nesse caso somente user
      ...state,
      // se for diferente permanece na lista, caso seja igual, exclui da lista, gerarndo um novo estado
      users: state.users.filter((u) => u.id !== user.id),
    };
  },
};

export const UsersProvider = (props) => {
  function reducer(state, action) {
    // se o nome da função actions for igual a action.type
    // ?????
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  // dispatch é a forma para invocar um evento
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // provendo o objeto users para a aplicação
    <UsersContext.Provider
      value={{
        // state iniciado pelo useReducer
        state,
        dispatch,
      }}>
      {/* renderizando tudo dentro desse componente */}
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
