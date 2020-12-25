import React,{useState} from 'react';
import ToDOList from './ToDoList';
const App=()=>{
  const[inputList,setInputList]=useState("");
  const[Items,setItems]=useState([]);
  const itemE=(meclick)=>{
    setInputList(meclick.target.value);

  };
  const listOfItems=()=>{
      setItems((oldItems)=>{
        return[...oldItems,inputList];
      });
      setInputList("");
  };
  const deleteItem=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      })
    })
  }
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDO List</h1>
          <br/>
          <input type="text" placeholder="Add a Item" value={inputList} onChange={itemE}/>
          <br className="brs"/>
          <button onClick={listOfItems}>+</button>
          
          <br/>
          <br/>
          <ol>
            {Items.map((itemval,index)=>{
              return <ToDOList key={index} id={index}
                text={itemval}
                onSelect={deleteItem}
              />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;