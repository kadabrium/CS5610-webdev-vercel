"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";

export type User = (typeof usersJson)[number];
/*{
    "_id": "123",
    "username": "iron_man",
    "password": "stark123",
    "firstName": "Tony",
    "lastName": "Stark",
    "email": "tony@stark.com",
    "role": "STUDENT",
    "loginId": "001234561S",
    "section": "S101",
    "lastActivity": "2020-10-01",
    "totalActivity": "10:21:32"
  },*/

export const emptyUser = {
  "_id": "",
    "username": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "role": "STUDENT",
    "loginId": "",
    "section": "",
    "lastActivity": "",
    "totalActivity": ""
};

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}