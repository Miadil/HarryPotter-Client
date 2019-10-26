import React, { Component } from "react"

import Card from "../components/Card"

import "./House.css"

class House extends Component {
  state = {
    HouseCharacters: [],
    isLoading: false
  }
  getCharacterHouse = () => {
    const { house } = this.props.match.params
    fetch(`https://harrypotterapi20.herokuapp.com/characters/houses/${house}`)
      .then(res => res.json())
      .then(
        res =>
          console.log("res: ", res) ||
          this.setState({ HouseCharacters: res, isLoading: true })
      )
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
