import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Images from './components/images';
import { Provider } from 'react-redux';
import { rootReducers } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas'

let sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Images />
        <Footer />
      </div>
    </Provider>
    
  );
}

export default App;
