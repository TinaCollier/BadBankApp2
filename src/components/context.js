import { createContext, useState } from 'react';

const users = [
    {
        name: "Tina",
        email: "tina@mit.edu",
        password: "secret",
        balance: 100,
        transactionHistory: [],
    }
];

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(users);
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{ user, setUser, loggedInUser, setLoggedInUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default { UserContext };