import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Component/Home';
import { useState } from 'react';
import Alert from './Component/Alert';
import Tasklist from './Component/Tasklist';


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
   <>
   <Navbar/>
   <Alert alert={alert}/>
   <Routes >
        <Route exact path="/login" element={<Login showAlert = {showAlert}/>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signup" element={<Signup showAlert = {showAlert}/>} />
        <Route exact path="/tasklist" element={<Tasklist/>} />
        {/* <Route exact path="/navbar" element={<Navbar />} /> */}
        
      </Routes>
   
   </>
  );
}

export default App;
