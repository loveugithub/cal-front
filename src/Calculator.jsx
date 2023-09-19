import { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("");

  return (
    <div>
      <div className="row">
        <div className="result">{val}</div>
      </div>
      <div className="row">
        <div>AC</div>
        <div>⅞</div>
        <div>%</div>
        <div>÷</div>
      </div>
      <div className="row">
        <div
          onClick={() => {
            setVal((val) => val + "7");
          }}
        >
          7
        </div>
        <div>8</div>
        <div>9</div>
        <div>*</div>
      </div>
      <div className="row">
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>-</div>
      </div>
      <div className="row">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>+</div>
      </div>
      <div className="row">
        <div>0</div>
        <div>.</div>
        <div>=</div>
      </div>
    </div>
  );
};

export default Calculator;
