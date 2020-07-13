import React  from 'react';

class Test extends React.Component {
     
    componentDidMount =()=>{
        fetch ("https://www.googleapis.com/civicinfo/v2/representatives?includeOffices=true&address=Chicago&roles=legislatorUpperBody&levels=country&key=AIzaSyA9Xr5PrJ3bWzdhCyyMjUn0pUZ4SaYPiHk")
        .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });

    
   
    }
    render() {
      return <h1>Hello, test </h1>;
    }
}
export default Test