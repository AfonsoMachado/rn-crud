import React, {createContext} from 'react';
import users from '../data/users';

const UsersContext = createContext({});

export const UsersProvider = (props) => {
  return (
    // provendo o objeto users para a aplicação
    <UsersContext.Provider
      value={{
        state: {
          // lista de usuarios para provê
          users,
        },
      }}>
      {/* renderizando tudo dentro desse componente */}
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
