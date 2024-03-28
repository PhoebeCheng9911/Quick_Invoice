import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import logo from './assets/logo.png'

class App extends Component {
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
          <a href="https://github.com/PhoebeCheng9911/swift_invoice">
          <img src={logo} width={200} height={185} alt ="" />
          </a>
              {/*<img src={{ require('./')}}*/}
        <InvoiceForm/>
      </Container>
    </div>
  );
}}

export default App;
