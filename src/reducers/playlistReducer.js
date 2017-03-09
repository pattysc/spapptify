export default function playlistReducer(state=[], action){
  switch (action.type) {
    case 'MAKE_PLAYLIST':
      let ids = action.payload.map(function(track){return track.id});
      console.log(ids);
      return ids
    default:
      return state
  }
}
