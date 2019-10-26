import React from "react"
import { Link } from "react-router-dom"
import houses from "../assets/json/houses.json"
import "./Home.css"

class Home extends React.Component {
  state = {
    house: []
  }

  render() {
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
