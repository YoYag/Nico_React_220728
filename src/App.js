import React from "react";
import PropTypes from "prop-types";

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
        fontSize: props.fontSize,
      }}
    >
      {props.text}
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
        big={true}
        changeValue={changeValue}
        fontSize={14}
      />
      <MemorizedBtn text="확인" big={false} fontSize={16} />
    </div>
  );
}

export default App;
