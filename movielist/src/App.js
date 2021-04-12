import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Header  from './components/Header';
import  WatchList  from './components/WatchList';
import  Watched  from './components/Watched';
import  Add  from './components/Add';
import { GlobalProvider} from './context/GlobalState'
import './components/Responsive.css';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/watchlist">
            <WatchList />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          <Route  exact path="/">
            <Add />
          </Route>
        </Switch>
      </Router>
    </div>
    </GlobalProvider>
  );
}

export default App;
