import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiPic: "",
      apiExplanation: "",
      apiVid: "",
    }
  }

  componentWillMount() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=J8yUtPsCKTDCcfBfw4pO3jGmYM7OjJpQhgHBqTTb')
    .then ((response) => {
      console.log(response);
      this.setState({apiPic: response.data.hdurl})
      this.setState({apiExplanation: response.data.explanation})
    })
    .catch((error) => {
      console.log(error);
    });

    axios.post('http://posttestserver.com/post.php', 'this is a test sentence')
    .then ((response) => {
      console.log(response);
      this.setState({apiResponse: response.data})
    })
    .catch((error) => {
      console.log(error);
    });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Your Daily Planet Picture!</h2>
        </div>
        <p className="App-intro">
          {this.state.apiResponse}
        </p>
        <div className="Central">
          <img src={this.state.apiPic} />
          <div className="Explanations">
            <p> {this.state.apiExplanation} </p>
          </div>
        </div>
      </div>
    );
  }
}

// https://api.nasa.gov/planetary/apod?api_key=J8yUtPsCKTDCcfBfw4pO3jGmYM7OjJpQhgHBqTTb

export default App;
