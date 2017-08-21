import * as types from '../constants/ActionTypes'

function songs(state = {
  items: [],
}, action) {
  switch(action.type) {
    case types.CHANGE_ACTIVE_SONG:
      // console.log(action.activeSongIndex)
      if (action.song === null) {
        return Object.assign({}, state, {activeSongIndex: null})
      }
      return Object.assign({}, state, {activeSongIndex: action.activeSongIndex})

    case types.RECEIVE_SONGS:
      return Object.assign({}, state, {
        items: action.songs,
      })

    default:
      return state
  }
}

export default songs