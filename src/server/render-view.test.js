import renderView from './render-view';

const mockRes = {
  render: () => {},
};

test('Returns null with Response object', () => {
  expect(renderView(mockRes, 'TEST')).toBe(null);
});

test('Returns null without Response object', () => {
  expect(renderView(null, 'TEST')).toBe(null);
});
