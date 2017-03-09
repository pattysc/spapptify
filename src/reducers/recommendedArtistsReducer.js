export default function artistsReducer(state=[], action){
  switch (action.type) {
    case 'GET_RECOMMENDED_ARTISTS':
      return action.payload
    default:
      return state
  }
}
