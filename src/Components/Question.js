import React, { useState } from "react";
import Error from "./Error";

function Question({ setBudget, setBleft, setShowQuestion }) {
  const [quant, setQuant] = useState(0);
  const [error, setError] = useState(false);

  const defineBudget = (e) => {
    setQuant(parseInt(e.target.value, 10));
  };

  const addBudget = (e) => {
    e.preventDefault();

    if (quant < 1 || isNaN(quant)) {
      setError(true);
      return;
    }

    setError(false);
    setBudget(quant);
    setBleft(quant);
    setShowQuestion(false);
  };

  return (
    <div className="question">
      {error ? <Error msg="El presupuesto es incorrecto" /> : null}
      <h1>Colocá tu presupuesto</h1>

      <form onSubmit={addBudget}>
        <input
          type="number"
          className="number"
          placeholder="Ingresá tu presupuesto"
          onChange={defineBudget}
        />

        <input
          type="submit"
          classname="btn-submit"
          value="Define tu presupuesto"
        />
      </form>
    </div>
  );
}

export default Question;
