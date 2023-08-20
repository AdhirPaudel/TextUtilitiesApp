import './App.css';
import Alert from './component/Alert';
import NavBar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';
import AboutUs from './component/AboutUs'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

function App() {
  const [mode, setColorMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const modes = ['dark', 'grey', 'light', 'blue']
  const [selectedColor, navBarSelected] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggelDarkMode = (e) => {
    navBarSelected(e)
    setColorMode(selectedColor)
    if (e === 'dark') {
      setColorMode("dark")
      document.body.style.backgroundColor = 'black';
    }
    else if (e === 'light') {
      setColorMode("light")
      document.body.style.backgroundColor = 'white';
    }
    else {
      setColorMode("dark")
      document.body.style.backgroundColor = `${e}`;
    }
    showAlert(`Enabled ${e} Mode`, "success")

  }


  return (<>

    
    <Router>
      <Alert alert={alert} />
      <NavBar title="TextUtil" mode={mode} toggleMode={toggelDarkMode} modes={modes} setColorMode={setColorMode} />
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} textHeading='Enter the text here...' mode={mode} />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>


    {/* </div> */}
  </>);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
