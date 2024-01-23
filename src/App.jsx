import './App.css';
import {ApiUsers} from "./Components/ApiUsers"
import {ApiComments} from "./Components/ApiComments"
import {ApiAlbums} from "./Components/ApiAlbums"

function App() {
  return (
    <div className="App">
      {/* <ApiUsers/> */}
      {/* <ApiComments/> */}
      <ApiAlbums/>
    </div>
  );
}

export default App;
