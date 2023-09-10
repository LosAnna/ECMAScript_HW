// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  title;
  author;
  pages;

  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo = () => {
    console.log(
      `Название книги: ${this.title}\nАвтор книги: ${this.author}\nКоличество страниц в книге: ${this.pages}`
    );
  };
}

const myFirstBook = new Book('Война и мир', 'Лев Толстой', 1300);
myFirstBook.displayInfo();
