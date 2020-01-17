import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { TiArrowBack } from "react-icons/ti";
import Nav from 'react-bootstrap/Nav'


function App() {
  return (
    <Container className="App">
      <div className="App-header cardstyle card">
          <div>
        <p style={{ color: 'black'}} >Happy Birthday!</p>
        <p style={{ color: 'black'}}>
        Joy a lot, smiles even more,<br></br>
        good luck and great health! We love you!<br></br>
            </p>
            <p style={{ color: 'black'}}>From .....</p>
            </div>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link  style={{ textDecoration: 'none', color: 'black'}} className="backbtn" href="/home"><TiArrowBack/> </Nav.Link>
        </Nav>
      </div>
    </Container>

  );
}
export default App;
