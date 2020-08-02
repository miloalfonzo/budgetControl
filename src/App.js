import React, { useState } from "react";
import "./App.css";
import Question from "./Components/Question";
import Form from "./Components/Form";

function App() {
  const [budget, setBudget] = useState(0);
  const [bleft, setBleft] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  return (
    <div className="App">
      <h1>Presupuesto</h1>
      {showQuestion ? (
        <Question
          setBudget={setBudget}
          setBleft={setBleft}
          setShowQuestion={setShowQuestion}
        />
      ) : (
        <div className="row">
          <div className="">
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
