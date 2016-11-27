require('babel-register')({
  presets: [ 'es2015', 'react' ]
});
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {DashboardContainer} from './js/containers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './js/reducer';
import {Map, fromJS} from 'immutable';
import {setState} from './js/actions';
import {createClient} from 'redis';

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
const base_url = process.env.BASE_URL || 'http://localhost:' + port;
const client = createClient();

const initialState = Map({
  title: 'My Dashboard',
  time: new Date(),
  text: 'Sunny',
  temp: 23,
  shout: 'Hey there!',
  teabags: 5
});
let state = initialState;
const store = createStore(
  reducer,
  state
);


router.get('/', function (req, res) {
  // Render page
  let markup = ReactDOMServer.renderToString(
    <Provider store={store}>
      <DashboardContainer />
    </Provider>);
  res.render('index', {
    markup: markup,
    state: JSON.stringify(state)
  });
});

app.use(router)  

var config = require('./webpack.config');

// Set up templating
app.set('views', __dirname + '/views');
app.set('view engine', "hbs");
app.engine('hbs', require('hbs').__express);

// Set up logging
app.use(morgan('combined'));

// Serve static files
app.use(express.static(__dirname + '/static'));

// Compress responses
app.use(compression());

// Listen
var io = require('socket.io')({
}).listen(app.listen(port));
console.log("Listening on port " + port);
// Handle connections
io.sockets.on('connection', function (socket) {
  socket.on('action', (newstate) => {
    let currentState = setState(newstate);
    io.emit('state', currentState);
    state = currentState.state;
  });
});
