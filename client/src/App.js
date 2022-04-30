import React, { Component } from "react"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./components/Button.css"
import './App.css'
import './components/logic/Calculate'
import { getSunset } from "sunrise-sunset-js";


class App extends Component {

  /**
   * 
   * lat: 26.728767072264652,
      long: 58.377543190703605,
      date: "2022-05-31"
   */

  constructor(props) {
    super(props)

    this.state = {
      lat: 26.728767072264652,
      long: 58.377543190703605,
      date: "2022-05-31",
      sunset: getSunset(0,0,new Date())
  
    }


    
  }

  handleLongChange = (event) => {
    this.setState({
      long: event.target.value
    })
  }

  handleLatChange = (event) => {
    this.setState({
      lat: event.target.value
    })
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(`${this.state.long} ${this.state.lat}  ${this.state.date}`)
    console.log(`${getSunset(this.state.lat, this.state.long, this.state.date)}`)
    this.setState({
      sunset: getSunset(26.728767072264652, 58.377543190703605, '01 Jan 1970 00:00:00 GMT')
    })
    

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper>

        <form onSubmit={this.handleSubmit}>
            <div class="grid-container">
            <label class="grid-label" >Longtitude</label>
            <label class="grid-label">Latitude</label>
            <label class="grid-label">Date</label>

            <input type="number" class="grid-input" value={this.state.long} onChange={this.handleLongChange}></input>
            <input type="number" class="grid-input" value={this.state.lat} onChange={this.handleLatChange}></input>
            <input type="date" class="grid-input" value={this.state.date} onChange={this.handleDateChange}></input>
            </div>
            <button className="submitButton" type="Submit">Submit</button>
        </form>
        </Wrapper>
        
        <div className="nightData">
          <h3>Data about the night</h3>
        </div>


      </div>
    )
  }










  /** 
  constructor(props) {
    super(props)

    this.state = {
      lat: 26.728767072264652,
      long: 58.377543190703605,
      date: "2022-05-31",
      submitted: false
    }

  }

  handleSubmit = event => {
    this.setState({
      submitted: true
    },
    () => {
      console.log(`${this.state.long} ${this.state.lat}  ${this.state.date} ${this.state.submitted}`)
    }
    )
    event.preventDefault()
  }

  handleLongChange = (event) => {
    this.setState({
      long: event.target.value
    })
  }

  handleLatChange = (event) => {
    this.setState({
      lat: event.target.value
    })
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Wrapper title="Calculator">
              <InputForm />
        </Wrapper>
      </div>
    );
  }*/
}

export default App



