// import './App.css';
import Test from './Test';

function App() {
  const myProps = [{
    name:'Siva',
    age:20,
    email:'abc@gmail.com'
  }]
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Test myProps={myProps}/>
        </p>
      </header>
    </div>
  );
}

export default App;