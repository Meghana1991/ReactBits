import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Sai', age: 100 },
      { id: 2, name: 'Manju', age: 100 }
    ],
    otherArr: [1, 2, 3, 4, 5, 6, 7, 8],
    showDiv: false,
    showDiv2: false,
  }

  /**
   * Here we change the state 
   * by only changing small portion of name
   */
  changeStateHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: 'Sai', age: 100 },
        { id: 2, name: newName, age: 27 }
      ]
    })
  }
  /**
   * Modify that particular Input's element only
   */
  changeStateHandlerParticular = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => { return p.id == id });
    //make a copy now. Instead of working with same array
    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  /**
   * The event is pased by the REACT by itself
   */
  twoWayBinding = (event) => {
    this.setState({
      persons: [
        { id: 1, name: 'Sai', age: 100 },
        { id: 2, name: event.target.value, age: 27 }
      ]
    })
  }

  toggleFunction = () => {
    const stateRep = this.state.showDiv;
    this.setState({
      showDiv: !stateRep
    })
  }

  toggleFunction2 = () => {
    const stateRep = this.state.showDiv2;
    this.setState({
      showDiv2: !stateRep
    })
  }

  render() {
    /**
     * The render gets called whenever rendering of page is required, may be initial render
     * or re-render of page. Write code here whenever you want to check something before rendering
     */
    let personss = null;
    if (this.state.showDiv2) {
      {/* ----------------------------------------------Way 2 and the---------------------------------------------------------- */ }
      {/* ----------------------------------------------FOR LOOP---------------------------------------------------------- */ }

      personss = (
        <div>
          {this.state.persons.map((person) => {
            //Map converts the given array to anything which we want
            //key is important for uniqueness to React to change only that part of array instead whole
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              customChanged={(event) => this.changeStateHandlerParticular(event, person.id)}
            />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>I m React app</h1>
        <button onClick={this.toggleFunction} disabled>Toggle 1 way</button>
        <button onClick={this.toggleFunction2}>Toggle 2 way</button>
        {personss}
        {/* ------------------------------------------------------------------------------------------------------------------------- */}
         {this.state.showDiv ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} key={this.state.persons[0].id}>My hobbies are painting</Person>
            <Person
              key={this.state.persons[1].id}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              customClickEv={this.changeStateHandler.bind(this, 'Man')}
              customChanged={this.twoWayBinding}></Person>
          </div> : null}

        {/* 
          Here 2 things to notice
          1)onclick is made onClick in JSX
          2)we dont invoke the function by () instead we pas the reference of it because the JSX will call the function when it is being parsed to HTML if we give ()
        */}
        {/* <button onClick={this.changeStateHandler}>Click me</button> */}
        {/* <button onClick={this.changeStateHandler.bind(this)}>Click me</button> */}
      </div >
    );

    /**
     * JSX internally compiles to the below
     */
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I m React App'))

  }
}
export default App;