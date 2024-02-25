import { Routes, Route } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Blue from  './components/Blue'
import Red from "./compontes/Red"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div id="container">
        <h1></h1>
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <link to="/blue">blue</link>
        <link to="/red">red</link>
        <link to="*">404</link>
        
        {/* navigation here */}</div>
      <div id="main-section">
    <Routes>
      <Route path="/"red element={<h1>red</h1>} />
      <Route path="/"blue element={<h1>blue</h1>}/>
      <Route path="/" element={<home/>} />
      <Rout path= "*" element={<div>404</div>}/>
      
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App
