import React from 'react';
import logo from './podaruk.png';
import './App.css';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import App1 from './App1'
import ReactDOM from 'react-dom';


function App() {
  return (
    <Container className="App">
      <div className="App-header">
        <Button  variant="light" className="btn1 decoration-none" onClick={() => ReactDOM.render(<App1 />, document.getElementById('root'))}><img src={logo} className="App-logo" alt="logo"/></Button>
      </div>
    </Container>
  );
}
export default App;
