import { useState } from "react";

const inputStyle = {
  text: {
    height: "32px",
    width: "220px",
    fontSize: "20px",
  },
  btn: {
    // height: "30px",
    // width: "100px",
    backgroundColor: "blue",
    color: "white",
    // border: "none",
    padding: "8px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  },
};

function AddCalculation({ saveCalculation }) {
  const [name, setName] = useState("");

  return (
    <div style={{ margin: "50px 0px" }}>
      <h2>Calculation Name</h2>
      <input
        style={inputStyle.text}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <input
        style={inputStyle.btn}
        onClick={() => {
          saveCalculation(name);
          setName("");
        }}
        type="button"
        value="Save"
      />
    </div>
  );
}

export default AddCalculation;
