import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

import {getTraks} from './actions/traks'
import {Link} from 'react-router-dom'


const App = ({tracks, onAddTrack, onFindTrack, onGetTraks, ownProps}) => {
  console.log('ownProps', ownProps);
  let trackInput = '';
  let searchInput = '';

  const addTrack = () => {
    console.log('ADDD', trackInput.value)
    onAddTrack(trackInput.value)
    trackInput.value = ''
  }

  const findTrack = () => {
    console.log('FIND', searchInput.value)
    onFindTrack(searchInput.value)
  }

  return (
    <div>
      <div>
        <input type="text" ref={(input) => {trackInput = input}}/>
        <button onClick={addTrack}>Добавить</button>
      </div>
      <div >
        <input type="text" ref={(input) => {searchInput = input}}/>
        <button onClick={findTrack}>Поиск</button>
      </div>
      <div>
        <button onClick={onGetTraks}>Получить Треки</button>
      </div>
      <ul>
        {
          tracks.map((track, index) => 
            <li key={index}>
              <Link to={`/tracks/${track.id}`}>
                {track.name}
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}
 
export default connect(
  (state, ownProps) => ({
    tracks: state.tracks.filter(
      tracks => tracks.name.includes(state.filterTracks)
    ),
    ownProps
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id:  Date.now().toString(),
        name
      }
      dispatch({type: 'ADD_TRACK', payload})
    },
    onFindTrack: (name) => {
      dispatch({type: 'FIND_TRACK', payload: name})
    },
    onGetTraks: () => { 
      dispatch(getTraks())
    }
  })
)(App);
