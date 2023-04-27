import logo from './logo.svg';
import './App.css';

function App() {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  console.log('Hello from the component')
  return (
    <div className="App">
      <p>Hello World, it is {now.toString()}</p>
      <p>{a} plus {b} is {a+b}</p>
    </div>
  );
}

export default App;
