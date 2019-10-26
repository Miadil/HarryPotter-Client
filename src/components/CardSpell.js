import React from "react"

const CardSpell = ({ spellName, type }) => {
  return (
    <div>
      <p>
        Name : {spellName} Type : {type}
      </p>
    </div>
  )
}

export default CardSpell
