const numberOfThings = prompt('Введите колличество покупаемы едениц: ');

export default function converter() {
  if (+numberOfThings < 0 | numberOfThings != +numberOfThings) {
    throw ('error');
  }
  return numberOfThings;
}

try {
  converter();
  console.log(converter());
} catch (error) {
  console.log('Неверный формат ввода!')
}
