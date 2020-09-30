import React, { createContext, useState } from 'react';

export const Context = createContext({});

export const Provider = (props) => {
  // Initial values are obtained from the props
  const {
    users: initialUsers = [],
    selectedUser: initialSelectedUsers = {},
    children,
  } = props;

  // Use State to keep the values
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(initialSelectedUsers);

  const addNewUser = (userName) => {
    const newUser = { id: new Date().getTime().toString(), name: userName };
    setUsers(users.concat([newUser]));
  };

  // pass the value in provider and return
  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        selectedUser,
        setSelectedUser,
        addNewUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const { Consumer } = Context;
