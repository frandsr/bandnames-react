import React, { useState, useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";

const BandAdd = () => {
  const [nombreNuevaBanda, setNombreNuevaBanda] = useState("");
  const { socket } = useContext(SocketContext);

  const emitirAgregarBanda = (nombreNuevaBanda) => {
    socket.emit("agregar-banda", { nombreNuevaBanda });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (nombreNuevaBanda.trim().length > 0) {
      emitirAgregarBanda(nombreNuevaBanda);
    }
  };
  return (
    <>
      <h1>Agregar Banda</h1>
      <form action="submit" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Nuevo nombre de banda"
          value={nombreNuevaBanda}
          onChange={(e) => setNombreNuevaBanda(e.target.value)}
        />
      </form>
    </>
  );
};

export default BandAdd;
