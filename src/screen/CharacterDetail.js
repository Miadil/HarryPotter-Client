import React, { Component } from "react"

import axios from "axios"

class CharacterDetail extends Component {
  state = {
    data: []
  }
  getData = async () => {
    const { id } = this.props.match.params
    const res = await axios.get(
      `https://harrypotterapi20.herokuapp.com/characters/${id}`
    )
    await this.setState({ data: res.data[0] })
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    console.log(this.state)
    const {
      name,
      ancestry,
      dateOfBirth,
      eyeColour,
      gender,
      hairColour,
      house,
      image,
      species
    } = this.state.data
    return (
      <div>
        {name}
        <div>
          <img src={image} alt={name} />
        </div>
        <div>{house}</div>
        <div>Caracteristique :</div>
        <div>Blood : {ancestry}</div>
        <div>date Of Birth : {dateOfBirth}</div>
        <div>hair Colour : {hairColour}</div>
        <div>eye Colour : {eyeColour}</div>
        <div>species : {species}</div>
        <div>gender : {gender}</div>
      </div>
    )
  }
}

export default CharacterDetail
