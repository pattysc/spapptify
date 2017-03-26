import React, { Component } from 'react';
import axios from 'axios'
import { getRecommendedArtists, makePlaylist, resetPlaylist, resetRecommendations } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserInput from './UserInput'
import CheckboxForm from './CheckboxForm'
import SongWidget from './SongWidget'
import ResetButton from './ResetButton'

class SpapptifyApp extends Component {

  componentDidMount(){
    axios.get(`https://spapptifyserver.herokuapp.com/auth`).then(function(data){
      console.log(data.data); //yay or fail message
    })
  }

  render() {
    return (
      <div className="SpapptifyApp">
        <UserInput/>
        <div id="grid">
          {this.props.recommended_artists.length > 0 && <CheckboxForm/>}
          {this.props.playlist.length > 0 && <SongWidget/>}
        </div>
        {this.props.playlist.length > 0 && <ResetButton/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recommended_artists: state.recommended_artists,
    playlist: state.playlist
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getRecommendedArtists, makePlaylist, resetPlaylist, resetRecommendations}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SpapptifyApp)
