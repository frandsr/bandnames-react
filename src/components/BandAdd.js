import React, { useState } from "react";

const BandAdd = ({ emitirAgregarBanda }) => {
  const [nombreNuevaBanda, setNombreNuevaBanda] = useState("");

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
