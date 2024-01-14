import React, { useState } from 'react'
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";
import { useDrop } from 'react-dnd';

import { useDrag } from 'react-dnd';

export default function Item({ text, id, setUpdateUI, setShowPopup, setPopupContent }) {
  // const [text, setText] = useState(second)
  const [, drop] = useDrop({
    accept: 'TODO',
    drop: (item, monitor) => {
      // Handle the drop event, update the task status in the database
      // You can use your API calls or state management here
      console.log(`Task dropped to list: ${id}`);
      // updateStatus(text, id);

    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'TODO',
    item: { text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      
    }),
  });
  

    const [done, setDone] = useState(false);
    const deleteTodo = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
          console.log(res.data);
          setUpdateUI((prevState) => !prevState);
        });
      };
      const updateToDo = () => {
        setPopupContent({ text, id });
        setShowPopup(true);
      };




      
    return (
        
        <div ref={drag} onClick={() => setDone(!done)} className={` items select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}>
            <div  class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{    'padding':'10px'}}/>
                <span ref={drop}  className={`${done === true ? 'line-through' : ''} tex`} style={{ opacity: isDragging ? 0.5 : 1 }}>
                {text}
                </span>
            </div>
            <div onClick={deleteTodo}>
                <BsTrash className='text-[#e74c3c]'  />
            </div>
        </div>
    )
}
