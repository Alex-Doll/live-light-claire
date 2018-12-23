// @flow

import compression from 'compression';
import express from 'express';

import { STATIC_PATH, WEB_PORT } from '../shared/config';
import { isProd } from '../shared/util';
import renderView from './render-view';

const app = express();

app.set('view engine', 'ejs');

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  renderView(res, 'home');
});

app.get('/about', (req, res) => {
  renderView(res, 'about');
});

app.get('/services', (req, res) => {
  renderView(res, 'services');
});

app.get('/events', (req, res) => {
  renderView(res, 'events');
});

app.get('/scheduling', (req, res) => {
  renderView(res, 'scheduling');
});

app.get('/contact', (req, res) => {
  renderView(res, 'contact');
});

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} in ${isProd ? '(PRODUCTION)' : '(DEVELOPMENT)\nKeep "npm run-script dev:wds" running in another terminal'}`);
});
