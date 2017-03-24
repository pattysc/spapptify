import React, { Component } from 'react'
import { getRecommendedArtists, makePlaylist } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SongWidget extends Component {
  constructor(){
    super()

    this.state = {
      // playlist: '',
      currentTrack: ''
    }
  }

  componentDidMount(){
    this.setState({
      // playlist: this.props.playlist,
      currentTrack: this.props.playlist[Math.round(Math.random()*20)]
    })
  }

  nextSongClick(){
    this.setState({
      currentTrack: this.props.playlist[Math.round(Math.random()*20)]
    })
  }

  render(){
    let string = `https://embed.spotify.com/?uri=spotify:track:${this.state.currentTrack}`

    return (
      <div>
        <div>
          <iframe src={string} width="300" height="380"></iframe>
        </div>
        <button onClick={this.nextSongClick.bind(this)}> Next Song </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({makePlaylist}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SongWidget)
