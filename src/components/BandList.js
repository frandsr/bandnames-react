import React from "react";

const BandList = () => {
  const crearRows = () => {
    return (
      <tr>
        <td>
          <div className="btn btn-primary"> +1</div>
        </td>
        <td>
          <input type="text" className="form-control" />
        </td>
        <td>
          <h3>15</h3>
        </td>
        <td>
          <button className="btn btn-danger">Borrar</button>
        </td>
      </tr>
    );
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
