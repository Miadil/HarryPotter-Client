import React, { Component } from "react"
import CardSpell from "../components/CardSpell"
class Spell extends Component {
  state = {
    spells: []
  }
  getData = () => {
    console.log("je suis dans getData")
    fetch("http://localhost:4242/spell")
      .then(res => res.json())
      .then(res => this.setState({ spells: res }))
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    console.log("result : ", this.state.spells)

    return (
      <div>
        {this.state.spells.map(spell => (
          <CardSpell spellName={spell.spell} type={spell.type} />
        ))}
      </div>
    )
  }
}

export default Spell
