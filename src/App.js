import React, { useState } from "react";
// import { AiFillCheckCircle } from "react-icons/ai"; // import a react icon
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  function nextHandler() {
    if (counter < 3) {
      setCounter(counter + 1);
    }
  }

  function previousHandler() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  const steps = [
    { id: 1, text: "Step 1: Learn React" },
    { id: 2, text: "Step 2: Invest your new income" },
    { id: 3, text: "Step 3: Final Step" },
  ];

  return (
    <>
    <h1 style={{justifyContent: "center", textAlign: "center", background: "orange", padding:"5px"}}>Previous-Next btn with 3ree steps</h1>
    <div style={{background: "orange", height: "500px" }}>
      <div style={{ display: "flex", justifyContent: "space-around",}}>
        <p
          style={{
            backgroundColor: counter === 1 ? "blue" : "white",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "5px 10px 5px 10px",
            color: counter === 1 ? "white" : "black",
          }}
        >
          1
        </p>
        <p
          style={{
            backgroundColor: counter === 2 ? "blue" : "white",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "5px 10px 5px 10px",
            color: counter === 2 ? "white" : "black",
          }}
        >
          2
        </p>
        <p
          style={{
            backgroundColor: counter === 3 ? "blue" : "white",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "5px 10px 5px 10px",
            color: counter === 3 ? "white" : "black",
          }}
        >
          3
        </p>
      </div>

      {/* Dynamic heading */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1 style={{background: " white"}}>
          {steps[counter - 1].text} 
          {/* <AiFillCheckCircle /> */}
        </h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "100px" }}>
        <button style={{marginLeft: "20px", borderRadius: "20px", padding: "5px", backgroundColor: "blue", color:'white', cursor:"pointer"}} onClick={previousHandler}>Previous</button>
        <button style={{marginLeft: "20px", borderRadius: "20px", padding: "5px", backgroundColor: "blue", color:'white', cursor:"pointer"}} onClick={nextHandler}>Next</button>
      </div>
    </div>
    </>
  );
}

export default App;
