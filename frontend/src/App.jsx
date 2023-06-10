import './App.css';
import {Routes,Route} from "react-router-dom"
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { AddNote } from './components/AddNote';
import { Notes } from './components/GetNote';
function App() {
  return (
    <div className="App">
      HII
     <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/addnote"  element={<AddNote/>}/>
      <Route path="/notes"element={<Notes/>}/>
     </Routes>
    </div>
  );
}

export default App;
