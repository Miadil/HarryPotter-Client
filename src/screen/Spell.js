import React, { Component } from "react"
import axios from "axios"

import CardSpell from "../components/CardSpell"

class Spell extends Component {
  state = {
    spells: []
  }
  getData = () => {
    axios
      .get("http://harrypotterapi20.herokuapp.com/spell")
      .then(res => this.setState({ spells: res.data }))
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    return (
      <div>
        {this.state.spells.map((spell, index) => (
          <CardSpell key={index} spellName={spell.spell} type={spell.type} />
        ))}
      </div>
    )
  }
}

export default Spell
