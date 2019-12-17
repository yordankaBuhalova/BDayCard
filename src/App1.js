import React from 'react';
import logo from './birthday.png';
import './App.css';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav'
import Card from './Card'
function App() {
  return (
    <Container className="App">
      <div className="App-header">

        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link  style={{ textDecoration: 'none', color: 'white'}} className="backbtn" href="/home">Back</Nav.Link>
        </Nav>
        <Button  variant="light" className="btn1" onClick={() => ReactDOM.render(<App />, document.getElementById('root'))}><img src={logo} className="App-logo1" alt="logo"/></Button>
        <Button  style={{ textDecoration: 'none'}} variant="outline-secondary" className="cardbtn" onClick={() => ReactDOM.render(<Card />, document.getElementById('root'))}>Card</Button>
        <p>От Иво и Дани</p>
      </div>
    </Container>

  );
}
export default App;
