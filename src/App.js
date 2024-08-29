import logo from './logo.svg';
import './App.css';
import { LineGraph } from './components/LineGraph';
import { BarGraph } from './components/Bar';

function App() {
  return (
    <>
      <h1>Line Graph</h1>   
        <LineGraph />
      <h1>Bar Graph</h1>
        <BarGraph />
    </>
  );
}

export default App;
