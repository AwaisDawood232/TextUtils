import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import Textarea from './Components/Textarea';

// I just comment router section b/c router create problem when deploying on github but it is best for hosting/server
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
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

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   showAlert("Install TextUtils Virus Detected", "danger");        
      // }, 4000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router>       */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes>

        <Route exact path="/about" element={<About mode={mode} />}/>
        <Route exact path="/" element={<Textarea showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          }/> */}

          {/* <Route path="./Components/About">
            <About mode={mode} />
          </Route> */}
          {/* <Route path="/"> */}
             <Textarea showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          {/* </Route> */} 
      {/* {/* </Routes> */}
    </div>   
    {/* </Router>  */}
    </>
  );
}

export default App;










        /* <Route path="./Components/About">
            <About mode={mode} />
          </Route> */
          /* <Route path="/">
             <Textarea showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route> */