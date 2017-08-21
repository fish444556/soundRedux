import React from 'react'

class SongsCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='card song-card'>
        <p>
          {this.props.song.id}
        </p>
      </div>
    )
  }
}

export default SongsCard