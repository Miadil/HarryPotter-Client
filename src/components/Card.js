import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({ name, image, id }) => {
  const idCharacters = `/characters/${id}`
  return (
    <div>
      <Link to={idCharacters}>
        <p>{name}</p>
        <img className="CardImg" src={image} alt={name} />
      </Link>
    </div>
  )
}

export default Card
