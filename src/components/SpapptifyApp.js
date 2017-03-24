import React, { Component } from 'react';
import axios from 'axios'
import { getRecommendedArtists, makePlaylist } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import UserInput from './UserInput'
import CheckboxForm from './CheckboxForm'
import SongWidget from './SongWidget'

class SpapptifyApp extends Component {

  componentDidMount(){
    axios.get(`http://localhost:8080/auth`).then(function(data){
      console.log(data.data); //yay or fail message
    })
  }

  render() {
    return (
      <div className="SpapptifyApp">
        <UserInput/>
        {this.props.recommended_artists.length > 0 && <CheckboxForm/>}
        {this.props.playlist.length > 0 && <SongWidget/>}
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
  return bindActionCreators({getRecommendedArtists, makePlaylist}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SpapptifyApp)
