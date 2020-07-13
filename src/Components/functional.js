import React, {useState} from 'react';
import Component from "../component";
import Form from "./classcomp"

const  Func =()=>{

    const [person,setperson]= useState(
        [
         { name: "zeryab" , age:1},
         { name: "ali ", age:2},
         { name: "farhan", age:3}
        ]
      )


    //  console.log(this.state);

    const  addPerson = (per)=> {
        console.log(per);
        let persons = [...person,per]
        

        setperson(persons)
        console.log(persons)

    }

    return (
        <div className="App">   
        <h1>
            hello from functional
            <Component person = {person}/>
            <Form addPerson = {addPerson}/>
        </h1> 
        </div>
      );



}

  export default Func;