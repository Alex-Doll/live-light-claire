// @flow

import compression from 'compression';
import express from 'express';

import { APP_NAME, STATIC_PATH, WEB_PORT, WDS_PORT } from '../shared/config';
import { isProd, scriptSource } from '../shared/util';
import renderApp from './render-app';

const app = express();

app.set('view engine', 'ejs');

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs', { STATIC_PATH, WDS_PORT, scriptSource });
});

app.get('/about', (req, res) => {
});

app.get('/services', (req, res) => {
});

app.get('/events', (req, res) => {
});

app.get('/scheduling', (req, res) => {
});

app.get('/contact', (req, res) => {
});

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} in ${isProd ? '(PRODUCTION)' : '(DEVELOPMENT)\nKeep "npm run-script dev:wds" running in another terminal'}`);
});
