import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  applyBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="Container">
        <h1 className="heading">speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedOmeter"
        />
        <div className="card">
          <h1 className="speed">Speed is {speed}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button className="button1" type="button" onClick={this.applyBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
