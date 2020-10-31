import React, { useState } from 'react';
import './App.css';
import  ToDoList from './ToDoList'  
import 'bootstrap/dist/css/bootstrap.css';
 

function App() {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
      setInputList(event.target.value)

  }

  const listOfItems = () => {
      setItems((oldItems) => {
        return [ ...oldItems,  inputList]
      });
      setInputList("");

  }

  const deleteItems  = () => {

  }

  return (
    <>
     <div className="maindiv">
       <div className="centrediv">
         <br/>
         <br/>
         <input type="text" placeholder="Add item" onChange={itemEvent} value={inputList}/>
             <button onClick={listOfItems} className="btn btn-primary">
               +
             </button>

            <ol>
              {/* <li> {inputList} </li> */}
              { items.map((itemval, index) => {
                return  < ToDoList key={index} id={index} text={itemval}
                  onSelect={deleteItems}
                />
              
              })} 
              
            </ol>
       </div>
     </div>
    </>
     
  );
}

export default App;
