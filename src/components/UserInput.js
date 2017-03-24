import React, { Component } from 'react'
import { getRecommendedArtists, makePlaylist, resetPlaylist } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      query: ''
    }
  }

  artistSubmit(event){
    event.preventDefault()
    this.props.getRecommendedArtists(this.state.query)
    this.props.resetPlaylist()
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
          <div id="grid">
            <div><h3>Give me one of your favorite artists</h3></div>
            <div><h3>lol</h3></div>
          </div>
          <br/>
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
  return bindActionCreators({getRecommendedArtists, makePlaylist, resetPlaylist}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput)
