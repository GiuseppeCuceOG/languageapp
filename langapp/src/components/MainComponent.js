import React from 'react';
import Card from './Card';
import Login from './LoginComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';



class Main extends React.Component {
  
  render() {
    let dictionary = [
      {'eng':'good morning', 'rus':'доброе утро', 'ita':'buongiorno', 'fin':'huomenta'}
    ]
    
    return (
      <Switch>
        <Route path="/card" component={() => <Card dict={dictionary}/>} />
        <Route path="/login" component={() => <Login />} />
        <Redirect to="/card" />
      </Switch>
    );
  }
}

export default withRouter(Main);
