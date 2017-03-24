import React, { Component } from 'react'
import { getRecommendedArtists, makePlaylist, resetPlaylist } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SongWidget from './SongWidget'

class CheckboxForm extends Component {

  componentWillMount(){
    this.selectedCheckboxes = new Set();
  }

  artistSubmit(event){
    event.preventDefault()
    this.props.getRecommendedArtists(this.state.query)
  }

  toggleCheckbox(artist_id){
    if (this.selectedCheckboxes.has(artist_id)) {
      this.selectedCheckboxes.delete(artist_id);
    } else {
      this.selectedCheckboxes.add(artist_id);
    }
  }

  checkboxSubmit(event){
    event.preventDefault()
    let artist_ids = this.selectedCheckboxes
    this.props.makePlaylist(artist_ids)
    this.selectedCheckboxes = new Set();
  }

  render(){
    console.log();
    return (
      <div>
        <h3> check up to 5 options </h3>
        <form onSubmit={this.checkboxSubmit.bind(this)}>
          { this.props.recommended_artists.map((artist) => {
              return <div className="checkbox"> <input type="checkbox" id={artist.name} onChange={this.toggleCheckbox.bind(this, artist.id)} /> <label> {artist.name} </label> </div>
            })}
          <h3> recommend me a song based on these artists! </h3>
          <input type="submit"/>
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


export default connect(mapStateToProps, mapDispatchToProps)(CheckboxForm)
