import React from "react"
import Card from "../components/Card"

import "./Characters.css"

class Characters extends React.Component {
  state = {
    characters: [],
    isLoading: false
  }

  componentDidMount() {
    fetch("https://harrypotterapi20.herokuapp.com/characters")
      .then(res => res.json())
      .then(
        res =>
          console.log("FETCH : ", res) ||
          this.setState({ characters: res, isLoading: true })
      )
  }
  render() {
    return (
      <div>
        <p>Characters</p>
        <div className="GaleryCharacters">
          {this.state.isLoading ? (
            this.state.characters.map((character, index) => (
              <Card
                key={index}
                id={character.id}
                house={character.house}
                name={character.name}
                image={character.image}
              />
            ))
          ) : (
            <div>... Loading</div>
          )}
        </div>
      </div>
    )
  }
}

export default Characters
