import React from 'react'
import ReactDOM from 'react-dom'

import SongDetails from './SongDetails'
import { formatStreamUrl } from '../utils/FormatUtils'

class SongPlayer extends React.Component {

  componentDidMount() {
    const audioElm = ReactDOM.findDOMNode(this.refs.audio)
    audioElm.play()
  }

  componentDidUpdate(prevProps) {
    debugger
    if (prevProps.song && prevProps.song.id === this.props.song.id) {
      return
    }
    const audioElm = ReactDOM.findDOMNode(this.refs.audio)
    audioElm.play()
  }

  render() {
    const { song } = this.props

    const image = song.artwork_url.replace('large', 't300x300')

    return (
      <div className='song-player'>
        <audio ref='audio' src={formatStreamUrl(song.stream_url)} />
        <div className='container'>
          <div className='song-player-main'>
            <div className='song-player-info'>
              <img className='song-player-image' src={image} />
              <SongDetails title={song.title} username={song.user.username} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SongPlayer