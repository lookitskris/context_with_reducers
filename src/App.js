import SelectFruits from "./components/SelectFruits";
import Bar from "./components/Bar";
import { useStore } from "./context/store";
import "./App.css";

function App() {
  const { state } = useStore();

  return (
    <div className="App">
      <SelectFruits />
      <p>
        you have selected the {state.selectedFruit} fruit from another component
      </p>
      <Bar />
    </div>
  );
}

export default App;
