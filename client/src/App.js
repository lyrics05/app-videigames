import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateGame from './components/CreateGame';
import Details from './components/Details';
import Landing from './components/Landing';


function App() {
  return (
    <BrowserRouter>
    <div className="App">    
      <Switch>
      <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={HomePage}/>  
        <Route exact path="/videogames/:id" component={Details}/>  
        <Route exact path="/videogame" component={CreateGame}/> 
 
    
     
      </Switch>    
    </div>
    </BrowserRouter>
  );
}
console.log("desde app")

export default App;
