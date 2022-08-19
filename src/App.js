// import logo from './logo.svg';
import { useState } from 'react';
import {Navbar} from './Components/Navbar';
import TextForm from "./Components/TextForm";
import Alerts from './Components/Alerts';
import {About} from './Components/About';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {
const [mode, setMode] = useState("light");
const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
}
const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor=" rgb(3, 44, 108)";
    showAlert("Dark Mode Enabled", "success");
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Light Mode Enabled", "success");
  }
}

  return (
  <>
    <Router>
    <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode}/>
    <Alerts alert={alert}/>
    <div className='container my-3'>
    <Routes>
          <Route path="about/*" element={<About mode={mode}/>}/>
          <Route path="/*" element={ <TextForm showAlert={showAlert} heading="Enter the text to convert" mode={mode} />}/>     
    </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
