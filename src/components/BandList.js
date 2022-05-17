import React, { useState, useEffect } from "react";

const BandList = ({
  data,
  emitirVotarBanda,
  emitirBorrarBanda,
  emitirCambioNombre
}) => {
  //State
  const [bands, setbands] = useState(data);

  //Effects
  useEffect(() => setbands(data), [data]);

  // Events methods
  const cambiarNombre = (event, id) => {
    const nuevoNombre = event.target.value;
    setbands((bands) =>
      bands.map((band) => {
        if (band.id === id) band.name = nuevoNombre;
        return band;
      })
    );
  };

  const onPerdioFoco = (id, nuevoNombre) => {
    emitirCambioNombre(id, nuevoNombre);
  };

  //Helper methods
  const crearRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => emitirVotarBanda(band.id)}
          >
            {" "}
            +1
          </button>
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            value={band.name}
            onChange={(event) => cambiarNombre(event, band.id)}
            onBlur={() => onPerdioFoco(band.id, band.name)}
          />
        </td>
        <td>
          <h3>{band.votes}</h3>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => emitirBorrarBanda(band.id)}
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{crearRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
