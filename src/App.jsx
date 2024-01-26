import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ApiUsers} from "./Components/ApiUsers"
import {ApiComments} from "./Components/ApiComments"
import {ApiAlbums} from "./Components/ApiAlbums"
import {ApiCountry} from "./Components/ApiCountry"
import {ApiCountryCardDetail} from "./Components/ApiCountryCardDetail"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={ <ApiCountry />}/>
        <Route path="/detail/:countryIndex" element={<ApiCountryCardDetail />} />
      </Routes>
    </Router>
      {/* <ApiUsers/> */}
      {/* <ApiComments/> */}
      {/* <ApiAlbums/> */}
    </div>
  );
}

export default App;
