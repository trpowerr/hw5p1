import converter from '../trycash';

test('should ', () => {
  const received = converter();

  const expected = +converter();

  expect(received).toBe(expected);
});
