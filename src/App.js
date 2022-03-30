import React from 'react';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 

  handleChange(event) {
    this.setState({fname: event.target.value});
    //console.log(this.state.fname);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    fetch('http://localhost/name', {
      method:"POST",
      cache: "no-cache",
      headers:{
        "content_type":"application/json",
      },
      body:JSON.stringify(this.state.fname)
      }
    ).then(response => {
      fetch('http://localhost/name', {
       method:"GET"}
     )
       .then(response => response.json())
       .then(data => this.setState({lname:data.lname}))
   });
       

    //console.log(this.state.lname);
  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.fname} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <h1>Response From Server</h1>
        <textarea value={this.state.lname} placeholder="Response"/>
      </form>
    );
  }
}

function App() {
  
  return(
    <div className="App">
      <header className="App-header">
        <h1>Request to Server</h1>
        <NameForm/>
      </header>
    </div>
  );
}

export default App;
