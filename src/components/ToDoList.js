import React from 'react';
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

const ToDoList = (props) => {
    return (
        <div className="toDoList">
            <button className="remove" onClick={props.handleRemoveAllItems}>Remove all items</button>
            {props.options.length === 0 && <p>{"Please add first item to start"}</p>}
                { 
                    props.options.map((option) => {
                        return <ToDoItem 
                            key={option} 
                            number={props.options.indexOf(option)} 
                            optionText={option} 
                            handleDeleteItem={props.handleDeleteItem} 
                        />
                    })
                }
        </div>
    );
}

export default ToDoList;

// export default class ToDoList extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Here will be the list</h2>
//                 <button onClick={this.props.handleRemoveAllTasks}>Remove all tasks</button>
//                     { 
//                         this.props.options.map((option) => {
//                             return <ToDoItem key={option} optionText={option}/>
//                         })
//                     }
//             </div>
//         );
//     }
// }
