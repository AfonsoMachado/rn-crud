import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const initialState = {users};
const UsersContext = createContext({});

export const UsersProvider = (props) => {
  function reducer(state, action) {
    console.warn(state, action);
    return state;
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
