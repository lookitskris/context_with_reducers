import React from "react";
import { useStore } from "../context/store";
import useFetchAll from "../services/useFetchAll";

export default function Characters() {
  const { state, dispatch } = useStore();
  const { data: characters, loading, error } = useFetchAll(["characters"]);

  return (
    <ul>
      {console.log(characters)}
      {loading
        ? null
        : characters[0].map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
    </ul>
  );
}
