import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Иванов Илья Александрович";

  console.log('This is App ');
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
      </header>
    </div>
  );
}

export default App;
