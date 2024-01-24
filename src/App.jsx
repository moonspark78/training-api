import './App.css';
import {ApiUsers} from "./Components/ApiUsers"
import {ApiComments} from "./Components/ApiComments"
import {ApiAlbums} from "./Components/ApiAlbums"
import {ApiCountry} from "./Components/ApiCountry"

function App() {
  return (
    <div className="App">
      {/* <ApiUsers/> */}
      {/* <ApiComments/> */}
      {/* <ApiAlbums/> */}
      <ApiCountry/>
    </div>
  );
}

export default App;
