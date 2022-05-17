import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const connectSocketServer = () => {
  const socket = io.connect("http://localhost:3000", {
    transports: ["websocket"]
  });
  return socket;
};

function App() {
  //State
  const [online, setOnline] = useState(false);
  const [socket] = useState(connectSocketServer());
  const [bands, setBands] = useState([]);

  //Effects
  useEffect(() => {
    console.log(socket);
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => setOnline(false));
  }, [socket]);

  useEffect(() => {
    socket.on("current-bands", (bands) => setBands(bands));
  }, [socket]);

  //Helper methods
  const votar = (id) => {
    socket.emit("votar-banda", { id });
  };
  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success"> Online</span>
          ) : (
            <span className="text-danger"> Offline</span>
          )}
        </p>
      </div>
      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList data={bands} votar={votar} />
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
