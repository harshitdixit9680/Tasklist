import { AiOutlinePlus } from "react-icons/ai";
import React, { useEffect, useState } from "react";
// import ToDo from "./components/ToDo";
import axios from "axios";
import { baseURL } from "../utils/constant";
import Item from "./Item";
// import Popup from "./components/Popup";
export default function Input(props) {
    // const inputBox = useRef();
    const [toDos, setToDos] = useState([]);
    const [input, setInput] = useState("");
    const [updateUI, setUpdateUI] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});

    useEffect(() => {
        axios
            .get(`${baseURL}/get`)
            .then((res) => setToDos(res.data))
            .catch((err) => console.log(err));
    }, [updateUI]);

    const saveToDo = () => {
        axios
            .post(`${baseURL}/save`, { toDo: input })
            .then((res) => {
                console.log(res.data);
                setUpdateUI((prevState) => !prevState);
                setInput("");
            })
            .catch((err) => console.log(err));
    };
    return (<>


<div className="list">
{toDos.map((el) => (
  <Item
    key={el._id}
    text={el.toDo}
    id={el._id}
    setUpdateUI={setUpdateUI}
    setShowPopup={setShowPopup}
    setPopupContent={setPopupContent}
  />
))}
</div>
        <div className='p-3 flex justify-around icontain'>
            <input type="text" placeholder='Enter The Task!!' className='inputing p-3 focus:outline-none w-[90%] border border-slate-400' value={input}
                onChange={(e) => setInput(e.target.value)} />
            <div className='cans cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-black text-3xl rounded-[50%] flex justify-center items-center' onClick={saveToDo}>


                <AiOutlinePlus />
            </div>
        </div>


{/* {showPopup && (
<Popup
setShowPopup={setShowPopup}
popupContent={popupContent}
setUpdateUI={setUpdateUI}
/>
)} */}
</>
    )
}
