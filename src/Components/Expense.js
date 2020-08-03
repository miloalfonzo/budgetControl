import React from "react";
import PropTypes from "prop-types";

function Expense({ expense }) {
  return (
    <div classname="expense">
      <p>
        {expense.name}
        <span className="expense">${expense.quant}</span>
      </p>
    </div>
  );
}

Expense.propTypes = {
  expense: PropTypes.object.isRequired
};

export default Expense;
