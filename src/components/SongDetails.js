import React from 'react'

class SongDetails extends React.Component {
  render() {
    const { title, username } = this.props

    return (
      <div className='song-card-details'>
        <div className='song-card-title'>{title}</div>
        <div className='song-card-user-username'>{username}</div>
      </div>
    )
  }
}

export default SongDetails