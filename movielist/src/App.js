import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Header  from './components/Header';
import  WatchList  from './components/WatchList';
import  Watched  from './components/Watched';
import  Add  from './components/Add';
import { GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </div>
    </GlobalProvider>
  );
}

export default App;
