import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import MovieList from './Components/MovieList/MovieList';
import Description from './Components/Description/Description'
import Errors from './Errors/Errors'

function App() {
  return (
    <div>
      {/*navbar*/}
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/description" component={Description} />
        <Route path="/*" component={Errors} />
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
