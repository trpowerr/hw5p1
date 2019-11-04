import { numberOfThings, converter } from '../trycash';

test('should check value', () => {
  const received = converter(10);

  const expected = +converter(10);

  expect(received).toBe(expected);
});

try {
  console.log(converter(numberOfThings));
} catch (error) {
  console.log('Неверный формат ввода!');
}

