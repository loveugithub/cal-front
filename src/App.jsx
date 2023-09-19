import { useState, useEffect } from "react";

import Frame from "./components/Frame";
import AddCalculation from "./components/AddCalculation";
import CalculationHistory from "./components/CalculationHistory";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [calculation, setCalculation] = useState(false);

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("http://localhost:3000/api/v1/calculations");
      const data = await response.json();
      setHistory(data.calculations);
    };

    fetchHistory();
  }, [calculation]);

  const storeCal = async (name) => {
    try {
      console.log(name);
      const res = await fetch("http://localhost:3000/api/v1/calculations", {
        method: "POST",
        body: JSON.stringify({
          name,
          cal: question,
          result: answer,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setCalculation((val) => !val);
    } catch (err) {
      console.log("error ", err);
    }
  };

  const delCal = async (id) => {
    console.log("id ", id);
    await fetch(`http://localhost:3000/api/v1/calculations/${id}`, {
      method: "DELETE",
    });
    setCalculation((val) => !val);
  };

  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);

    switch (value) {
      case "=":
        try {
          const answer = eval(question).toString();
          setQuestion(answer);
          setAnswer("");
        } catch (err) {}
        break;
      case "AC":
        setQuestion("");
        setAnswer("");
        break;
      default:
        setQuestion((val) => {
          return val + value;
        });
        try {
          const ans = eval(question + value).toString();
          setAnswer(ans);
        } catch (err) {}
        break;
    }
  };

  return (
    <>
      <Frame
        question={question}
        answer={answer}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        handleClick={handleClick}
      />
      <AddCalculation saveCalculation={storeCal} />
      <CalculationHistory history={history} deleteCal={delCal} />
    </>
  );
}

export default App;
