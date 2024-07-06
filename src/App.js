import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateTransaction from './pages/CreateTransaction';
import EditTransaction from './pages/EditTransaction';
import ShowTransaction from './pages/ShowTransaction';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/transactions/create" component={CreateTransaction} />
          <Route path="/transactions/:id/edit" component={EditTransaction} />
          <Route path="/transactions/:id" component={ShowTransaction} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
