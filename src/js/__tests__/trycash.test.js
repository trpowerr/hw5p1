import converter from '../trycash';

test('should check value', () => {
  const received = converter(10);

  const expected = +converter(10);

  expect(received).toBe(expected);
});
