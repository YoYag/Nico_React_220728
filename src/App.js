import React from "react";

function Btn(props) {
  return (
    <button
      onClick={props.changeValue}
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

const MemorizedBtn = React.memo(Btn);

function App() {
  const [value, setValue] = React.useState("저장");
  const changeValue = () => setValue("저장되었습니다");
  return (
    <div>
      <MemorizedBtn text={value} big={true} changeValue={changeValue} />
      <MemorizedBtn text="확인" big={false} />
    </div>
  );
}

export default App;
