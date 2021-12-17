import "./App.css";
import Navbar from "./components/navbar/Navbar";
import List from "./components/Add-Componets/List";
import Addlist from "./components/Add-Componets/Addlist";
import { useState } from "react";
function App() {
  const [list, setList] = useState([]);
  const addItem = (item) => {
    setList([item, ...list]);
  };
  const deletState = (index) =>{
    console.log(index)
    setList(list.filter((el,i)=> i!==index) )
  };
  return (
    <div>
      <Navbar addItem={addItem} />
      <Addlist addItem={addItem} />
      <div className="add-box">
        <List list={list} deletState={deletState}/>
      </div>
    </div>
  );
}

export default App;
