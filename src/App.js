
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {Routes,Route} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')

  const toggelMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode Enabled", "success")

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)

  }


  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggelMode={toggelMode} />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text analyze" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
      </Routes>
        
        {/* <About/> */}
      </div>

    </>
   

  );
}

export default App;
