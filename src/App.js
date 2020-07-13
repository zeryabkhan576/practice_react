import React ,{useState} from 'react';
import './App.css';
import Component from "./component";
import Test from "./test";
import Form from "./Components/classcomp"
import Func from "./Components/functional"
function App() {
  // const [person, setPerson]= useState(
  //   [
  //    { name: "zeryab" , id:1},
  //    { name: "ali ", id:2},
  //    { name: "farhan", id:3}
  //   ]
  // )

  
  return (

    
  
    <div className="App">
      <h1>hello  from app</h1>
      {/* <Component person={person} /> */}
      {/* <Test/> */}
      {/* < Form /> */}
      
      < Func  />
      


    </div>

  );

}

export default App;
