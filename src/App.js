import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./screen/Home"

import Characters from "./screen/Characters"
import CharacterDetail from "./screen/CharacterDetail"
import House from "./screen/House"
import Spell from "./screen/Spell"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route path="/characters/:id" component={CharacterDetail} />
        <Route path="/house/:house" component={House} />
        <Route path="/spell" component={Spell} />
      </Switch>
    </div>
  )
}

export default App
