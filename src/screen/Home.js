import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
// import houses from "../assets/json/houses.json"
import "./Home.css"

class Home extends React.Component {
  state = {
    houses: []
  }
  getData = async () => {
    const res = await axios.get(`https://harrypotterapi20.herokuapp.com/houses`)
    await this.setState({ houses: res.data })
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    const { houses } = this.state
    return (
      <div>
        <div>
          {houses.map((elem, index) => {
            return (
              <Link key={index} to={`/house/${elem.house}`}>
                <img className="HomeLogo" src={elem.img} alt="poudlard" />
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Home
