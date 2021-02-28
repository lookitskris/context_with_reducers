import React from "react";
import { useStore } from "../context/store";
import { addBar, minusBar } from "../context/actions/barActions";

export default function Bar() {
  const { state, dispatch } = useStore();

  return (
    <>
      <div
        style={{ background: "teal", height: "30px", width: state.barValue }}
      ></div>
      <div style={{ marginTop: "3rem" }}>
        <button onClick={() => dispatch(addBar())}>Increase bar size</button>
        <button onClick={() => dispatch(minusBar())}>Decrease bar size</button>
      </div>
    </>
  );
}
