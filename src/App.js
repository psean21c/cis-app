import React from 'react';
// import './App.css';
import Signin from './login/Sign';
import About from './about/About';
import Students from './students/Students';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/students" component={Students}/>
        <Route path="/login" component={Signin}/>
      </Switch>
    </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Accenture - Zafin team (Bootstrap) </h1>
  </div>
);

export default App;
