import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Table from './Table';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}
/*
function App(props) {
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {subject}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
