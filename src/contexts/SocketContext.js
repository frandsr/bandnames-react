import React, { createContext } from "react";
import useSocket from "../hooks/useSocket";

export const SocketContext = createContext();
const SERVER_PATH = "http://localhost:3000";

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket(SERVER_PATH);
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
