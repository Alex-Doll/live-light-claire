import { isProd, scriptSource } from './util';
import { WDS_PORT } from './config';

test('Should show false', () => {
  expect(isProd).toBe(false);
});

test('Should be our Webpack Dev Server route', () => {
  expect(scriptSource).toBe(`http://localhost:${WDS_PORT}/dist/js/bundle.js`);
});
