import React from 'react'
import ReactDOM from 'react-dom'

import SongDetails from './SongDetails'
import { formatSeconds, formatStreamUrl } from '../utils/FormatUtils'

class SongPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.togglePlay = this.togglePlay.bind(this)
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    this.state = {
      currentTime: 0,
      duration: 0,
      isPlaying: false
    }
  }

  componentDidMount() {
    this.bindEvents()
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

  componentWillUnmount() {
    const audioElm = ReactDOM.findDOMNode(this.refs.audio)
    audioElm.removeEventListener('timeupdate', this.handleTimeUpdate, false)
  }

  bindEvents() {
    const audioElm = ReactDOM.findDOMNode(this.refs.audio)
    audioElm.addEventListener('timeupdate', this.handleTimeUpdate, false)
  }

  handleTimeUpdate(e) {
    const audioElm = e.currentTarget
    const currentTime = Math.floor(audioElm.currentTime)
    // const { currentTime } = this.state

    if (currentTime === this.state.currentTime) {
      return
    }

    this.setState({
      currentTime: currentTime,
      duration: Math.floor(audioElm.duration)
    })
    console.log(currentTime + " : " + audioElm.duration)
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

  renderDurationBar() {
    const { currentTime, duration } = this.state
    if (duration !== 0) {
      const width = currentTime/duration * 100
      console.log(currentTime)
      return (
        <div
          className='song-player-seek-duration-bar'
          style={{width: `${width}%`}}>
        </div>
      )
    }
  }

  render() {
    const { song } = this.props
    const { isPlaying, currentTime, duration } = this.state

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
            <div className='song-player-seek'>
              <div className='song-player-seek-bar'>
                {this.renderDurationBar()}
              </div>
              <div className='song-player-time'>
                <span>{formatSeconds(currentTime)}</span>
                <span className='song-player-time-divider'>/</span>
                <span>{formatSeconds(duration)}</span>
              </div>
            </div>

          </div>
        </div>
       </div>
    )
  }
}

export default SongPlayer