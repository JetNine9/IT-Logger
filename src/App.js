import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModel from './components/logs/AddLogModel'

function App() {

  useEffect(() => {
      //Initalize material javascript
      M.AutoInit();
  })

  return (
    <div className="App">
      <SearchBar/>
      <div className="container" >
      <AddBtn/>
      <AddLogModel/>
      <Logs/>

      </div>
    </div>
  );
}

export default App;
