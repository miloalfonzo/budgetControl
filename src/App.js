import React, { useState, useEffect } from "react";
import "./App.css";
import Question from "./Components/Question";
import Form from "./Components/Form";
import List from "./Components/List";
import ControlBudget from "./Components/ControlBudget";

function App() {
  const [budget, setBudget] = useState(0);
  const [bleft, setBleft] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [newexpense, setNewexpense] = useState(false);

  useEffect(() => {
    if (newexpense) {
      setExpenses([...expenses, expense]);
    }

    const budgetLeft = bleft - expense.quant;
    setBleft(budgetLeft);
    setNewexpense(false);
  }, [expense]);

  // const addNewExpense = (expense) => {
  // };

  return (
    <div className="App">
      <div className="container">
        <h1>Presupuesto</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setBleft={setBleft}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form setExpense={setExpense} setNewexpense={setNewexpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <ControlBudget budget={budget} bleft={bleft} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
