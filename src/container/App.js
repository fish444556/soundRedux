import React from 'react'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions/songs'


import Songs from '../components/Songs'

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSongs())
  }

  render() {
    const { songs } = this.props
    return (
      <div className='container'>
        <div className='content'>
          <Songs songs={songs} />

        </div>
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