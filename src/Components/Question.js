import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

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
    <div className="question ">
      {error ? <Error msg="El presupuesto es incorrecto" /> : null}

      <form onSubmit={addBudget}>
        <div className="row ">
          <input
            type="number"
            className="u-full-width"
            placeholder="Ingresá tu presupuesto"
            onChange={defineBudget}
          />
          <input
            className="button-primary u-full-width"
            type="submit"
            classname="btn-submit"
            value="Define tu presupuesto"
          />
        </div>
      </form>
    </div>
  );
}

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setBleft: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired
};

export default Question;
