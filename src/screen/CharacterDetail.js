import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import allTheActions from "../actions"

class CharacterDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.actions.characters.getCharacters(
      `https://harrypotterapi20.herokuapp.com/characters/${id}`
    )
  }
  render() {
    return (
      <div>
        {this.props.loadingState ? (
          this.props.charactersState.map((character, index) => (
            <div key={index}>
              <div>{character.name}</div>
              <div>
                <img src={character.image} alt={character.name} />
              </div>
              <div>{character.house}</div>
              <div>Caracteristique :</div>
              <div>Blood : {character.ancestry}</div>
              <div>date Of Birth : {character.dateOfBirth}</div>
              <div>hair Colour : {character.hairColour}</div>
              <div>eye Colour : {character.eyeColour}</div>
              <div>species : {character.species}</div>
              <div>gender : {character.gender}</div>
            </div>
          ))
        ) : (
          <div>... loading</div>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  charactersState: state.charactersReducer.result,
  loadingState: state.charactersReducer.loading
})
const mapDispatchToProps = () => dispatch => ({
  actions: {
    characters: bindActionCreators(allTheActions.characters, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetail)
