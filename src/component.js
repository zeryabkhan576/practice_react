import React from 'react';
import Form from "./Components/classcomp";



const Component = (props) => {
    const {person} = props;
    console.log (person)
    const personList = person.map( person =>{
        return (

            <div key ={person.age}>
              <h3>hello  my name is {person.name} from componenet</h3>
              <h3>age is {person.age} </h3>
              
            </div>
          );
    })
    return (

      <div className="App">    
        {personList}
       
      </div>
    );
  }

  export default Component;