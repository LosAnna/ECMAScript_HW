// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  return (counter = {
    value: 5,
    increment() {
      return ++this.value;
    },
    decrement() {
      return --this.value;
    },
  });
}

createCounter();
console.log(counter.increment());
// console.log(counter.decrement());
