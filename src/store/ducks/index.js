import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';

import playlists from './playlists';
import playlistDetails from './playlistDetails';
import error from './error';
import player from './player';

export default combineReducers({
  auth,
  user,
  playlists,
  playlistDetails,
  error,
  player,
});
