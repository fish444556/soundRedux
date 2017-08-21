import React from 'react'

class SongsCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { changeActiveSong, song } = this.props
    const image = song.artwork_url.replace('large', 't300x300')
    // console.log(song)
    return (
      <div className='card song-card'>
        <div
          className='song-card-image'
          style={{backgroundImage: `url(${image})`}}
          onClick={changeActiveSong}
        />

        <div className='song-card-user'>
          <img className='song-card-user-image' src={song.user.avatar_url} />
          <div className='song-card-details'>
            <div className='song-card-title'>{song.title}</div>
            <div className='song-card-user-username'>{song.user.username}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SongsCard