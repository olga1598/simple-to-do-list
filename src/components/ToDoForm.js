import React, { Component } from 'react'
import "./ToDoForm.css";

export default class ToDoForm extends Component {
    state = {
        error: undefined  
    }
    // constructor(props) {
    //     super(props);
    //     this.handleAddTask = this.handleAddTask.bind(this);
        // this.state = {
        //     error: undefined
        // };
    // }
    // onChange = (e) => {
    //     const task = e.target.value;
    //     console.log(task);
    //     this.setState ({
    //         task: task
    //     })
    // };

    // this function is the class property, JS6 syntax
    handleAddItem = (e) => {
        e.preventDefault();
        const item = e.target.elements.option.value.trim();
        //console.log(task);

        // if smth returns from parent - it's one of two errors
        const error = this.props.handleAddItem(item);

        // this.setState(() => {
        //     return {
        //         error: error
        //     };
        // });----same the following---just return the object-----
        this.setState(() => ({ error: error }));

        e.target.elements.option.value = "";
    };

    render() {
        return (
            <div className="form">
                {this.state.error && <p>{this.state.error}</p>}
                <form className="newtodoitem" onSubmit={this.handleAddItem}>
                    <input type="text" placeholder="add your item" name="option" />
                    <button className="addtask" type="submit">Add item</button>
                </form>
            </div>
        )
    }
}


