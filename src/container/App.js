import React from 'react'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions/songs'


import Songs from '../components/Songs'
import SongPlayer from '../components/SongPlayer'

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSongs())
  }

  renderSongPlayer() {
    const { songs } = this.props
    if (!songs.activeSongIndex) {
      return
    }
    return <SongPlayer song={songs.items[songs.activeSongIndex]}/>

  }

  render() {
    const { songs } = this.props
    console.log(songs.items[songs.activeSongIndex])
    return (
      <div>
        <div className='container'>
          <div className='content'>
            <Songs {...this.props} />
          </div>
        </div>
        {this.renderSongPlayer()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { songs } = state
  return {
    songs
  }
}

export default connect(mapStateToProps)(App)