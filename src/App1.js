import React from 'react';
import logo from './birthday.png';
import './App.css';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav'
import Card from './Card'
import { TiArrowBack } from "react-icons/ti";
function App() {
  return (
    <Container className="App">
      <div className="App-header">
        <Button  variant="light" className="btn1" onClick={() => ReactDOM.render(<App />, document.getElementById('root'))}><img src={logo} className="App-logo1" alt="logo"/></Button>
        <Button  style={{ textDecoration: 'none'}} variant="outline-secondary" className="cardbtn" onClick={() => ReactDOM.render(<Card />, document.getElementById('root'))}>Card</Button>
         <Nav className="justify-content-start" activeKey="/home">
            <Nav.Link  style={{ textDecoration: 'none', color: 'white'}} className="backbtn" href="/home"><TiArrowBack/> </Nav.Link>
        </Nav>

      </div>
    </Container>

  );
}
export default App;
