import React from "react";
import App from "./App";
import { SocketProvider } from "./contexts/SocketContext";

const BandNamesApp = () => {
  return (
    <SocketProvider>
      <App />
    </SocketProvider>
  );
};

export default BandNamesApp;
