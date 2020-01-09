import React from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
    //console.log(props);
    return (
        <div className="toDoItem">
           Item {props.number + 1}: {props.optionText}
           {/*When the button is clicked we don't call the method 
            directly - this way we will be passing the (e) argument up. 
            Instead we define an inline function that allows us
            to call props.handleDeleteTask(props.optionText) with 
            the correct data and we will get the TEXT of the task 
            not the e itself, so we able to pass props.optionText
            to handleDeleteTask method*/}
           <button className="item" 
                onClick={(e) => {
                    props.handleDeleteItem(props.optionText)
                }}
            >Remove</button>
        </div>
    )
}

export default ToDoItem;

// export default class ToDoItem extends Component {
//     render() {
//         return (
//             <div>
//                Task: {this.props.optionText}
//             </div>
//         )
//     }
// }
 