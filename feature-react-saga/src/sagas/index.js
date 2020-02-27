import * as actions from '../actions';
import { take, put, call, fork } from 'redux-saga/effects';

export function* wathLoadImages() {
  while (true) {
    yield take(actions.LOAD_IMAGES, actions.loadImages);
  }
}

export default function* root() {
  yield fork(wathLoadImages)
}