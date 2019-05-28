import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {contacts.slice(0,5).map(person => (
                <tr>
                  <td>
                    <Col xs={6} md={4}>
                      <Image style={({width: '6em'})} src={person.pictureUrl} rounded />
                    </Col>
                  </td>

                  <td>{person.name}</td>
                  <td>{person.popularity}</td>
                </tr>
                )
              )}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
