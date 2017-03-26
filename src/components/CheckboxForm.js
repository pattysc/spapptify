import React, { Component } from 'react'
import { getRecommendedArtists, makePlaylist, resetRecommendations } from '../actions'
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
    // this.props.resetRecommendations()
  }

  checkboxCheck(){
    console.log(this);
  }

  render(){
    return (
      <div className='checkboxForm'>
        <h3> check up to 5 options </h3>
        <form onSubmit={this.checkboxSubmit.bind(this)} onChange={this.checkboxCheck.bind(this)}>
          <div id="recommendations">
            { this.props.recommended_artists.map((artist) => {
                return <div className="checkbox"> <input type="checkbox" id={artist.name} onChange={this.toggleCheckbox.bind(this, artist.id)} /> <label> {artist.name} </label> </div>
              })}
          </div>
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
  return bindActionCreators({getRecommendedArtists, makePlaylist, resetRecommendations}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckboxForm)
