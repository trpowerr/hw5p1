export const numberOfThings = prompt('Введите колличество покупаемы едениц: ');

export function converter(num) {
  if (+num < 0 || num != +num) {
    throw new Error('error');
  }
  return num;
}

