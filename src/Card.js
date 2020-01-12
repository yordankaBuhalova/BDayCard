import React from 'react';

import './App.css';
import Container from 'react-bootstrap/Container'
import { TiArrowBack } from "react-icons/ti";
import Nav from 'react-bootstrap/Nav'
function App() {
  return (
    <Container className="App">
      <div className="App-header cardstyle">
          <div>
        <p style={{ color: 'black'}} >Честит Рожден Ден!</p>
        <p style={{ color: 'black'}}>
            Радост много, усмивки още повече,<br></br> успехи безчет и чудесно здраве! Обичаме те!<br></br> Наздраве!
            </p>
            <p style={{ color: 'black'}}>От .....</p>
            </div>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link  style={{ textDecoration: 'none', color: 'black'}} className="backbtn" href="/home"><TiArrowBack/> </Nav.Link>
        </Nav>
      </div>
    </Container>

  );
}
export default App;
