// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link,
// } from "react-router-dom";

// if your using react-router-dom v6 or greater than in place of Switch use Routes :-

function App() {
  const [mode, setMode] = useState('dark');

  const [alert, setAlert] = useState({
    message: null,
    type: null
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert({
        message: null,
        type: null
      })
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#003366";
      document.body.style.color = 'white';
      showAlert(" Dark mode has been enabled ","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      showAlert(" Light mode has been enabled ","success");
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="CaseCanvas" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to Analyze.." mode={mode} />
      {/* <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze.." mode={mode} />} />
      <Route exact path="/about" element={<About/>} />
      </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;