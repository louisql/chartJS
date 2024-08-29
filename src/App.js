import logo from "./logo.svg";
import "./App.css";
import { LineGraph } from "./components/LineGraph";
import { BarGraph } from "./components/Bar";
import { PieChart } from "./components/Pie";

function App() {
  return (
    <>
      <h1>Line Graph</h1>
      <LineGraph />

      <h1>Bar Graph</h1>
      <BarGraph />

      <h1>Pie Chart</h1>
      <PieChart />
    </>
  );
}

export default App;
