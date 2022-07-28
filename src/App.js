import React from "react";
import PropTypes from "prop-types";

function Btn({ text, tomato, changeValue, fontSize = 14 }) {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: tomato ? "tomato" : "green",
        color: "white",
        border: "0",
        borderRadius: "10px",
        padding: "10px 20px",
        margin: "0 5px",
        fontSize: fontSize,
      }}
    >
      {text}
    </button>
  );
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};

const MemorizedBtn = React.memo(Btn);

function App() {
  const [value, setValue] = React.useState("저장");
  const changeValue = () => setValue("저장되었습니다");
  return (
    <div>
      <MemorizedBtn
        text={value}
        tomato={true}
        changeValue={changeValue}
        fontSize={16}
      />
      <MemorizedBtn text="확인" tomato={false} />
    </div>
  );
}

export default App;
