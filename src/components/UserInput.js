import React, { Component } from 'react'
import { getRecommendedArtists, makePlaylist } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }
  }

  componentWillMount(){
    this.selectedCheckboxes = new Set();
  }

  artistSubmit(event){
    event.preventDefault()
    this.props.getRecommendedArtists(this.state.query)
  }

  handleChange(e){
    this.setState({
      query: e.target.value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.artistSubmit.bind(this)}>
          <h3>give me an artist you like</h3><br/>
          <input type='text' onChange={this.handleChange.bind(this)} value={this.state.query} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recommended_artists: state.recommended_artists,
    playlist: state.playlist
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getRecommendedArtists, makePlaylist}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
