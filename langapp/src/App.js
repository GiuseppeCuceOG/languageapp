import React from 'react';
import Card from './components/Card';
import './App.css';



class App extends React.Component {
  
  render() {
    let dictionary = [
      {'eng':'good morning', 'rus':'доброе утро', 'ita':'buongiorno', 'fin':'huomenta'}
    ]
    
    return (
      <div className="App">
          <Card dict={dictionary}/>
      </div>
    );
  }
}

export default App;
