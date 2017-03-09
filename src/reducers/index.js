import {combineReducers} from 'redux'
import recommendedArtistsReducer from './recommendedArtistsReducer'
import playlistReducer from './playlistReducer'

const rootReducer = combineReducers({
  recommended_artists: recommendedArtistsReducer,
  playlist: playlistReducer
})

export default rootReducer
