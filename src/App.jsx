import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ApiUsers} from "./Components/ApiUsers"
import {ApiComments} from "./Components/ApiComments"
import {ApiAlbums} from "./Components/ApiAlbums"
import {ApiCountry} from "./Components/ApiCountry"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={ <ApiCountry/>}/>
        <Route/>
      </Routes>
    </Router>
      {/* <ApiUsers/> */}
      {/* <ApiComments/> */}
      {/* <ApiAlbums/> */}
    </div>
  );
}

export default App;
