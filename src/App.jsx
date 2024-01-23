import './App.css';
import {ApiUsers} from "./Components/ApiUsers"
import {ApiComments} from "./Components/ApiComments"

function App() {
  return (
    <div className="App">
      {/* <ApiUsers/> */}
      <ApiComments/>
    </div>
  );
}

export default App;
