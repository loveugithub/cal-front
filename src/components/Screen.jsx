import React from "react";
import ScreenRow from "./ScreenRow";

function Screen({ question, answer }) {
  return (
    <div>
      <ScreenRow value={question} />
      <ScreenRow value={answer} />
    </div>
  );
}

// Screen.propTypes = {
//   question: React.propTypes.string.required
// }

export default Screen;
