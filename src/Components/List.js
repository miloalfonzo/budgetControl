import React from "react";
import Expense from "./Expense";
import PropTypes from "prop-types";

function List({ expenses }) {
  return (
    <div classname="app">
      <h1>si</h1>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
}

List.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default List;
