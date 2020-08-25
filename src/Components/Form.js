import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

function Form({ setExpense, setNewexpense }) {
  const [name, setName] = useState("");
  const [quant, setQuant] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();

    if (quant < 1 || isNaN(quant) || name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    const expense = { name, quant, id: shortid.generate() };

    //console.log(expense);

    setExpense(expense);
    setNewexpense(true);

    setName("");
    setQuant(0);
  };
  return (
    <div className="form">
      <form onSubmit={addExpense}>
        <h2>Agregá tus gastos acá</h2>
        {error ? (
          <Error msg="Ambos campos son obligatorios o presupuesto incorrecto" />
        ) : null}
        <div className="input">
          <label>Nombre del gasto</label>
          <input
            type="text"
            className="expenseName"
            placeholder="Ej. Cargar la sube"
            className="u-full-width"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div clasName="input">
          <label>Cantidad del gasto</label>
          <input
            type="number"
            className="expenseCost"
            placeholder="Ej. 250"
            className="u-full-width"
            value={quant}
            onChange={(e) => setQuant(parseInt(e.target.value, 10))}
          />
        </div>
        <input
          type="submit"
          className="button-primary u-full-width submitExp"
          value="Agregar gasto"
        />
      </form>
    </div>
  );
}

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setNewExpense: PropTypes.func.isRequired
};

export default Form;
