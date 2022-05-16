import { Fragment } from "react";
import "./App.css";

function App() {
  /*스크립트 영역*/
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "45px",
  };
  return (
    <>
      {/*요소가 여러개인 경우 부모 요소에 감싸여 있어야 에러 안남*/}
      <div style={style} className="react">
        {name}
      </div>
      <div
        className="act" //주석 테스트
      >
        <input></input>
      </div>
      <input style={{ width: "50px" }}></input>
      <br></br>
      <input />
    </>
  );
}

export default App;
