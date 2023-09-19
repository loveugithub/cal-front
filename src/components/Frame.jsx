import React, { useState } from "react";
import Screen from "./Screen";
import Button from "./Button";

function Frame({ handleClick, question, answer }) {
  return (
    <div>
      <h2>Calculator</h2>
      <Screen question={question} answer={answer} />
      <div className="button-row">
        <Button handleClick={handleClick} label={"AC"} type="input" />
        {/* <Button label={"⅞"} type="input" /> */}
        <Button handleClick={handleClick} label={"%"} type="input" />
        <Button handleClick={handleClick} label={"÷"} type="action" />
      </div>
      <div className="button-row">
        <Button handleClick={handleClick} label={"7"} type="input" />
        <Button handleClick={handleClick} label={"8"} type="input" />
        <Button handleClick={handleClick} label={"9"} type="input" />
        <Button handleClick={handleClick} label={"*"} type="action" />

        {/* <Button label={"+"} type="action" /> */}
      </div>
      <div className="button-row">
        <Button handleClick={handleClick} label={"4"} type="input" />
        <Button handleClick={handleClick} label={"5"} type="input" />
        <Button handleClick={handleClick} label={"6"} type="input" />
        <Button handleClick={handleClick} label={"-"} type="action" />
      </div>
      <div className="button-row">
        <Button handleClick={handleClick} label={"1"} type="input" />
        <Button handleClick={handleClick} label={"2"} type="input" />
        <Button handleClick={handleClick} label={"3"} type="input" />
        <Button handleClick={handleClick} label={"+"} type="action" />
      </div>
      <div className="button-row">
        <Button handleClick={handleClick} label={"0"} type="input" />
        <Button handleClick={handleClick} label={"."} type="input" />
        <Button handleClick={handleClick} label={"="} type="action" />
      </div>
    </div>
  );
}

export default Frame;
