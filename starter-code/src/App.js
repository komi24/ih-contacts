import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class App extends Component {
  state = {
    displayedContacts: contacts.slice(0,5),
    title: "N'importe quoi",
    selectedOption: '1',
    selectedOption2: [],
    optionList: [
    {value: 1, selected: true},
    {value: 2, selected: false},
    {value: 3, selected: false},
    {value: 4, selected: false},
    {value: 5, selected: false},
    ]
  }

  addRandomContact() {
    let random = Math.floor(Math.random()*contacts.length)
    this.state.displayedContacts.push(contacts[random])
    this.setState({displayedContacts: this.state.displayedContacts})
  }

  sortByName() {
    this.setState({
      displayedContacts: this.state.displayedContacts.sort((a,b)=>a.name<b.name?-1:1)
    })
  }

  sortByPopularity() {
    this.setState({
      displayedContacts: this.state.displayedContacts.sort((a,b)=>a.popularity<b.popularity?-1:1)
    })
  }

  deleteItem(index) {
    this.state.displayedContacts.splice(index, 1)
    this.setState({displayedContacts: this.state.displayedContacts})

  }

  handleTitle(e) {
    console.log(this.state.title)
    this.setState({title: e.target.value})
  }

  handleSelect(e) {
    let selected = []
    for (let i =0; i< e.target.children.length; i++) {
      let option = e.target.children[i]
      if (option.selected)
        selected.push(option.value)
    }
    this.setState({selectedOption2: selected})
    console.log(this.state.selectedOption2)
  }

  handleChange(e) {
    let {name, value} = e.target
    console.log(this.state.selectedOption)
    this.setState({[name]: value})
  }

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
          <form>
          <input value={this.state.title} onChange={e => this.handleTitle(e)}/>
          <select 
            name="selectedOption" 
            value={this.state.selectedOption} 
            onChange={this.handleChange.bind(this)}
            >
            <option>{this.state.selectedOption}</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select onChange={this.handleSelect.bind(this)} multiple>
          {this.state.optionList.map(o=>(<option value={o.value}>{o.value}</option>))}
          </select>
          </form>
          <Button onClick={this.addRandomContact.bind(this)}>Add Random Contacts</Button>
          <Button onClick={this.sortByName.bind(this)}>Sort By Name</Button>
          <Button onClick={this.sortByPopularity.bind(this)}>Sort By Popularity</Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.displayedContacts.map((person,index) => (
                <tr key={index}>
                  <td>
                    <Col xs={6} md={4}>
                      <Image style={({width: '6em'})} src={person.pictureUrl} rounded />
                    </Col>
                  </td>

                  <td>{person.name}</td>
                  <td>{person.popularity}</td>
                  <td>
                    <Button 
                      variant="danger"
                      onClick={() => this.deleteItem(index)}
                    >Delete</Button>
                  </td>
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
