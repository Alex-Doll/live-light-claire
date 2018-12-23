import renderApp from './render-app';

test('Returns HTML string with correct title', () => {
  expect(renderApp('TEST')).not.toBeUndefined();
});
