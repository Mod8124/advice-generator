import './App.css';
import Card from './components/Card'
import AppLogic from './AppLogic';

function App() { 
const {advice,handleClick} = AppLogic();
  return (
    <main className="App">
         {advice &&  <Card advice={advice} handleClick={handleClick}></Card>}
         {!advice && <h2>Loading</h2>}

  <footer className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
    Coded by <a href="https://mod8124.github.io/portfolio/">Denis</a>.
  </footer>
    </main>
  );
}

export default App;
