import React from "react"
import { Link } from "react-router-dom"
// import axios from "axios"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import allTheActions from "../actions"
import "./Home.css"

class Home extends React.Component {
  state = {
    houses: []
  }
  getData = () => {
    this.props.actions.characters.getCharacters(
      `https://harrypotterapi20.herokuapp.com/houses`
    )
  }
  componentDidMount() {
    this.getData()
  }
  render() {
    console.log(this.props.housesState)
    // const { houses } = this.props
    return (
      <div>
        <div>
          {this.props.loadingState ? (
            this.props.housesState.map((elem, index) => {
              return (
                <Link key={index} to={`/house/${elem.house}`}>
                  <img className="HomeLogo" src={elem.img} alt="poudlard" />
                </Link>
              )
            })
          ) : (
            <div> ...Loading </div>
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  housesState: state.charactersReducer.result,
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
)(Home)
