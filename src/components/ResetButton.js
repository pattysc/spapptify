import React, { Component } from 'react'
import { resetPlaylist, resetRecommendations } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ResetButton extends Component {

  handleResetButtonClick(){
    this.props.resetPlaylist()
    this.props.resetRecommendations()
  }

  render() {
    return (
      <div className="ResetButton">
        <button onClick={this.handleResetButtonClick.bind(this)}> Make a new request! </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({resetRecommendations, resetPlaylist}, dispatch)
}


export default connect(mapDispatchToProps)(ResetButton)
