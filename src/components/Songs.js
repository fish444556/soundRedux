import React from 'react'
import SongsCard from '../components/SongsCard'

class Songs extends React.Component {
  constructor(props) {
    super(props)
    this.renderSongs.bind(this)
  }

  renderSongs() {
    const chunk = 5
    const { items } = this.props.songs
    let res = []
    for (let i = 0; i < items.length; i += chunk) {
      let songCards = items.slice(i, i + chunk).map((song) => (

        <SongsCard song={song} key={song.id} />
      ))

      res.push(
        <div className='songs-row'> { songCards }</div>
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