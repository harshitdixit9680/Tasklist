import { useEffect, useState } from "react";
import Input from "../Component/Input";
import Box from "../Component/Box";
import Home from "./Home";

function Tasklist() {
  const [components, setComponents] = useState([]);

  

  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleButtonClick = () => {
    const newComponent = <Tasklist  />;
    setComponents([...components, newComponent]);
    setShowNewComponent(true);
  };



  const [todos,setToDo] = useState([]);

  const removeToDo = (id) => {
    console.log(id);
    const newTodos = todos.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setToDo(newTodos); // state update
  }

  const addToDoHandler = (item) => {

    useEffect(() => {
     
    
    })
    
    // console.log(item);
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString()
        }
      ]
    )
  }
  return (
    <>
 
    <div className="h-screen p-3 continess">
        <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl  content">
            <h1 className="head">List</h1>
            <Box data={todos} removeHandler={removeToDo}/>
            <Input handler={addToDoHandler} />
        </div>
    </div>
    </>
  );
}

export default Tasklist;
