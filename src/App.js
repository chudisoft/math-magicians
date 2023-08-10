import './App.css';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/quote/Quote';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Quote />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
