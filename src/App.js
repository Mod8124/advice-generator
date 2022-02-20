import './App.css';
import icon from './images/icon-dice.svg';
import Card from './components/Card'
import UseFetch from './composables/UseFetch';
import { useEffect } from 'react';


function App() { 
  const key = 'https://api.adviceslip.com/advice/71'
  const {advice,get} = UseFetch(key)
  
  useEffect(()=> {
     get()
  },[key])

  return (
    <div className="App">
         {advice &&  <Card advice={advice}></Card>}
         {!advice && <h2>Loading</h2>}

      <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Denis</a>.
  </div>
    </div>
  );
}

export default App;
