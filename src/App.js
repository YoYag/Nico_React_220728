import React from "react";

function Btn(props) {
  return (
    <button
      style={{
        backgroundColor: props.big ? "tomato" : "green",
        color: "white",
        border: "0",
        borderRadius: "10px",
        padding: "10px 20px",
        margin: "0 5px",
      }}
    >
      {props.text}
    </button>
  );
}

function App() {
  return (
    <div>
      <Btn text="저장" big={true} />
      <Btn text="확인" big={false} />
    </div>
  );
}

export default App;
