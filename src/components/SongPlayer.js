import React from 'react'
import ReactDOM from 'react-dom'

import SongDetails from './SongDetails'
import { formatStreamUrl } from '../utils/FormatUtils'

class SongPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.togglePlay = this.togglePlay.bind(this)
    this.state = {
      isPlaying: false
    }
  }

  componentDidMount() {
    const audioElm = ReactDOM.findDOMNode(this.refs.audio)
    this.setState({isPlaying: true})
    audioElm.play()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.song && prevProps.song.id === this.props.song.id) {
      return
    }
    const audioElm = ReactDOM.findDOMNode(this.refs.audio)
    this.setState({isPlaying: true})
    audioElm.play()
  }

  togglePlay() {
    const audioElm = ReactDOM.findDOMNode(this.refs.audio)
    console.log("tttttttt")
    if (this.state.isPlaying) {
      this.setState({isPlaying: !this.state.isPlaying})
      audioElm.pause()
    } else {
      this.setState({isPlaying: !this.state.isPlaying})
      audioElm.play()
    }
  }

  render() {
    const { song } = this.props
    const { isPlaying } = this.state

    const image = song.artwork_url.replace('large', 't300x300')

    return (
      <div className='song-player'>
        <audio ref='audio' src={formatStreamUrl(song.stream_url)} />
        <div className='container'>
          <div className='song-player-main'>
            <div className='song-player-main-info'>
              <img className='song-player-image' src={image} />
              <SongDetails title={song.title} username={song.user.username} />
            </div>
            <div className='song-player-controls'>
              <div className='song-player-button'>
                <i className='icon ion-ios-rewind'></i>
              </div>
              <div
                className='song-player-button'
                onClick={this.togglePlay}
              >
                <i className={'icon ' + (isPlaying ? 'ion-ios-pause' : 'ion-ios-play')}></i>
              </div>
              <div className='song-player-button'>
                <i className='icon ion-ios-fastforward'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SongPlayer