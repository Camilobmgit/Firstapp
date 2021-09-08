// import Card from './components/card/card';
// import Panel from './components/panel/panel';
import './App.css';
import Header from './components/header/header';
import Home from './pages/home/home';
import Pag1 from './pages/pag1/pag1';
import Pag2 from './pages/pag2/pag2';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pag1">
            <Pag1 />
          </Route>
          <Route path="/pag2">
            <Pag2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
    // <div className="App">
    //   HOLA
    //   <Card 
    //     title="titulo" 
    //     text="Texto"
    //     colortitulo="blue" 
    //     colortexto="green"
    //     flag="true"
    //   />
    //   {/* <Card 
    //     title="titulo2" 
    //     text="Texto2" 
    //     colortitulo="pink" 
    //     colortexto="grey" 
    //     flag=""
    //   />
    //   <Panel 
    //     name= "Panel1"
    //   />
    // </div> */}
  
}

export default App;
