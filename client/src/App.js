import React from "react";
import axios from 'axios';
import { Container } from "@material-ui/core";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestShows: []
    };
  }

  // componentDidMount() { //dev
  //   console.log("componentDidMount success")
  //   axios.get('http://localhost:5000/api/data')
  //     .then(res => {
  //       console.log("data recieved: ", res.data);
  //       this.setState({ bestShows: res.data[0] });
  //     })
  //     .catch(alert);
  // }

  componentDidMount() { //prod
    console.log("componentDidMount success")
    axios.get('/api/data')
      .then(res => {
        console.log("data recieved: ", res.data);
        this.setState({ bestShows: res.data[0] });
      })
      .catch(alert);
 }


  render() {
    console.log("render bestShows: ", this.state.bestShows)
    return (
      <Container>
        <div>
          <h1>Azure MERN Demo</h1>
          <p> Deploying a MERN (MongoDB Express React Node.js) application to Azure app service and retrieving the data from MongoDB database </p>
          <h2> Chairmen </h2>
          <ul>
            {
               Object.keys(this.state.bestShows).map((data) => (
                <li>{data} - {this.state.bestShows[data]} </li>
            ))
            }
          </ul>
        </div>
      </Container>
    );
  }
}

export default App;
