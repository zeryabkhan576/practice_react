import React  from 'react';
import Component from"../component"


class  Form extends React.Component {

    state ={
        name : null,
        age : null
        
    }
     
    componentDidMount =()=>{
   
      };

    handleChange=(e)=>{
        this.setState({
            [e.target.id] :  e.target.valueAsNumber || e.target.value
          })
      }

    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log (this.state);
        // addPerson(this.state);
        this.props.addPerson(this.state)
           
      }
    
    render() {
      return  (
          <div>
               hellow from class comp
                <form onSubmit={ this.handleSubmit}>
                    <label htmlFor ="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />

                    <label htmlFor ="age">age</label>
                    <input type="number" id="age" onChange={this.handleChange}/>

                    <button type="submit">Submit</button>

                </form>
                 

          </div>
          
      );
    }
}
export default Form;