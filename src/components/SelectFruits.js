import React from "react";
import { useStore } from "../context/store";
import { updateFruitAction } from "../context/actions/fruitActions";

export default function SelectFruits() {
  const { dispatch } = useStore();

  const handleChange = (e) => {
    const options = e.target.options;
    const value = [...options]
      .filter((o) => o.selected)
      .map((o) => o.value)
      .join(",");
    dispatch(updateFruitAction(value));
  };
  return (
    <div>
      <select multiple onChange={handleChange}>
        <option>apple</option>
        <option>orange</option>
        <option>grape</option>
      </select>
    </div>
  );
}
