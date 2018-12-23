import renderView from './render-view';

const mockRes = {
  render: () => {},
};

test('Returns HTML string with correct title', () => {
  expect(renderView(mockRes, 'TEST')).toBe(null);
});
