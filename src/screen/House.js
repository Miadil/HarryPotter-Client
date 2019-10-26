import React, { Component } from "react"
import axios from "axios"
import Card from "../components/Card"

import "./House.css"

class House extends Component {
  state = {
    HouseCharacters: [],
    isLoading: false
  }

  getCharacterHouse = async () => {
    const { house } = this.props.match.params
    const res = await axios.get(
      `https://harrypotterapi20.herokuapp.com/characters/houses/${house}`
    )
    await this.setState({ HouseCharacters: res.data, isLoading: true })
  }

  componentDidMount() {
    this.getCharacterHouse()
  }

  render() {
    const { house } = this.props.match.params
    const { HouseCharacters, isLoading } = this.state
    console.log("this", this)
    return (
      <div>
        <p>{house}</p>
        <div className="houseCharacters">
          {isLoading ? (
            HouseCharacters.map((house, index) => {
              return (
                <Card
                  key={index}
                  id={house.id}
                  house={house.house}
                  name={house.name}
                  image={house.image}
                />
              )
            })
          ) : (
            <div>... Loading</div>
          )}
        </div>
      </div>
    )
  }
}
export default House
