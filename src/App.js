import React, { Component } from 'react';
import './App.css';
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Header from "./components/Header";

export default class App extends Component {
  state = {
    options: []
  }
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAllTasks = this.handleRemoveAllTasks.bind(this);
  //   this.handleAddTask = this.handleAddTask.bind(this);
  //   this.handleDeleteTask = this.handleDeleteTask.bind(this);
  //   this.state = {
  //     options: []
  //   }
  // }

  componentDidMount() {
    
    const json = localStorage.getItem("tasks");
    const options = JSON.parse(json);

    this.setState(() => ({ options: options }))
  }

  // monitoring for changes of state and storing in localstorage
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.options);
    console.log("state ", prevState);
    if (prevState.options.length !== this.state.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("tasks", json);
    }
  }

  // handleRemoveAllTasks() {
  //   this.setState(() => {
  //     return {
  //       options: []
  //     };
  //   });
  // } ---same the following-----just returning the object----
  handleRemoveAllItems = () => {
    this.setState(() => ({ options: [] }));
  }

  //OLD SYNTAX (not JS6), such function was required constructor function
  //look up for the construction function and binding
  // handleRemoveAllTasks() {
  //   this.setState(() => ({ options: [] }));
  // }


  handleDeleteItem = (optionToRemove) => {
    //console.log("delete single", optionToRemove);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return option !== optionToRemove
      })
    }));
  }

  handleAddItem = (item) => {
    // we return smth back only if smth went wrong - error!!!
    if(!item) {
      console.log("Need valid one");
      return "Please enter valid value to add the item";
    } else if (this.state.options.indexOf(item) > -1 ) {
      //console.log("Exists");
      return "Such item is already exists in the list";
    } 
    //so we will get underfined back in form component if everything OK
    // this.setState((prevState) => {    
    //   return {
    //     options: prevState.options.concat(task)
    //   };
    // }); ---same-------------
    this.setState((prevState) => ({ options: prevState.options.concat(item) }));
  }

  render() {
    const title = "List your to do's";
    const subTitle = "It's my simple to do list app. "
    return (
      <div className="App">
      <Header title={title} subTitle={subTitle} />
      <ToDoList 
        handleDeleteItem={this.handleDeleteItem}
        options={this.state.options} 
        handleRemoveAllItems={this.handleRemoveAllItems}
      />
      <ToDoForm handleAddItem={this.handleAddItem}/>
    </div>
    );
  }
}

