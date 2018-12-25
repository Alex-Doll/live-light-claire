import { WDS_PORT, STATIC_PATH } from './config';

function getUtil(environment, utilAttribute) {
  process.env.NODE_ENV = environment;
  jest.resetModules();
  return require('./util')[utilAttribute];
}

test('When in development, should show false', () => {
  const isProd = getUtil('development', 'isProd');
  expect(isProd).toBe(false);
});

test('When in production, should show true', () => {
  const isProd = getUtil('production', 'isProd');
  expect(isProd).toBe(true);
});

test('Should be our Webpack Dev Server route', () => {
  const scriptSource = getUtil('development', 'scriptSource');
  expect(scriptSource).toBe(`http://localhost:${WDS_PORT}/dist/js/bundle.js`);
});

test('Should be our STATIC_PATH route', () => {
  const scriptSource = getUtil('production', 'scriptSource');
  expect(scriptSource).toBe(STATIC_PATH + '/js/bundle.js');
});
