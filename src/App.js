import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './root'
import Login from './login'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Root />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;