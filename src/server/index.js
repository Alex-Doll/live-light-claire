// @flow

import compression from 'compression';
import express from 'express';

import { STATIC_PATH, WEB_PORT, WDS_PORT } from '../shared/config';
import { isProd, scriptSource } from '../shared/util';
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
  res.render('about.ejs', { STATIC_PATH, WDS_PORT, scriptSource });
});

app.get('/services', (req, res) => {
  res.render('services.ejs', { STATIC_PATH, WDS_PORT, scriptSource });
});

app.get('/events', (req, res) => {
  res.render('events.ejs', { STATIC_PATH, WDS_PORT, scriptSource });
});

app.get('/scheduling', (req, res) => {
  res.render('scheduling.ejs', { STATIC_PATH, WDS_PORT, scriptSource });
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs', { STATIC_PATH, WDS_PORT, scriptSource });
});

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} in ${isProd ? '(PRODUCTION)' : '(DEVELOPMENT)\nKeep "npm run-script dev:wds" running in another terminal'}`);
});
