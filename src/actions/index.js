import axios from 'axios'

axios.defaults.baseURL = 'https://api.spotify.com/'

export function getRecommendedArtists(query){
  console.log('recommendedartists action');

  var q = query.split(" ").join("+")
  var artists = axios.get(`v1/search?q=${q}&type=artist`).then(function(userData){
    var artist_URI = userData.data.artists.items[0].href
    var URI = artist_URI.split("/")[artist_URI.split("/").length - 1]
    return axios.get(`v1/artists/${URI}/related-artists`).then(
      function(related_artistsData){
        return related_artistsData.data.artists
      }
    )
  })
  return {
    type: 'GET_RECOMMENDED_ARTISTS',
    payload: artists
  }
}

export function makePlaylist(artist_ids){
  console.log('makeplaylist action');
  let ids = Array.from(artist_ids).join(",")
  var tracks = axios.get(`http://localhost:8080/make`, {params: {ids: ids} }).then(function(data){
    console.log(data);
    return data.data.tracks
  })
  return{
    type: 'MAKE_PLAYLIST',
    payload: tracks
  }
}

export function resetPlaylist(){
  return{
    type: 'RESET_PLAYLIST',
    payload: []
  }
}
