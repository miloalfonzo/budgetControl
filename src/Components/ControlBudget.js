import React from "react";
import { checkBudget } from "../Helper";
import PropTypes from "prop-types";

function ControlBudget({ budget, bleft }) {
  return (
    <div className="">
      <div className="alert alert-info" role="alert">
        Presupuesto: $ {budget}
      </div>
      <div className={checkBudget(budget, bleft)}> Restante: $ {bleft} </div>
    </div>
  );
}

ControlBudget.propTypes = {
  buget: PropTypes.number.isRequired,
  bleft: PropTypes.number.isRequired
};

export default ControlBudget;
