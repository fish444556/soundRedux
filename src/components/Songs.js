import React from 'react'
import SongsCard from '../components/SongsCard'
import { changeActiveSong } from '../actions/songs'

class Songs extends React.Component {
  constructor(props) {
    super(props)
    this.renderSongs.bind(this)
  }

  changeActiveSong(index) {
    const { dispatch, songs } = this.props
    dispatch(changeActiveSong(index))
  }

  renderSongs() {
    const chunk = 5
    const { items } = this.props.songs
    let res = []
    for (let i = 0; i < items.length; i += chunk) {
      let songCards = items.slice(i, i + chunk).map((song, index) => {
        return (
          <div className='col-1-5' key={song.id}>
            <SongsCard
              song={song}
              changeActiveSong={this.changeActiveSong.bind(this, i + index)}
            />
          </div>
        )
      })

      if (songCards.length < chunk) {
        for (let j = 0; j < chunk - songCards.length + 1; j++) {
          songCards.push(<div className='col-1-5'></div>)
        }
      }

      res.push(
        <div className='songs-row grid'> { songCards }</div>
      )
    }
    return res
  }

  render() {
    return (
      <div>
        { this.renderSongs() }
      </div>
    )
  }
}

export default Songs