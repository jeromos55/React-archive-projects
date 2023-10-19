import "./styles.css";

export default function App() {
  const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature"
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux"
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452
        }
      }
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy"
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0
        }
      }
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: ""
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701
        }
      }
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal"
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960
        }
      }
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos"
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095
        }
      }
    }
  ];

  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  function getBooks() {
    return data;
  }

  ///////////////////
  // Destructuring //
  ///////////////////

  var books = getBook(1);

  var title1 = books.title;
  var author1 = books.author;
  console.log(title1, author1);

  var { title, author, genres } = books;
  console.log(title, author, genres);

  console.log(genres[2]);
  //-- because the genres is an object

  const [gen1, gen2] = genres;
  //-- because the gen1, gen2 aren't object
  console.log(gen1, gen2);

  ///////////////////
  // rest operator //
  ///////////////////

  //const books = getBook(1);
  //var { genres } = books;
  console.log(genres);

  var [gen3, gen4, ...otheGens] = genres;
  //-- the gen3 --> genres[0], the gen4 --> genres[1]
  //-- the otherGens --> the other genres items
  //-- the spread operator to have last the destructor list
  //-- because this is the rest (...) operator
  console.log(gen3, gen4, otheGens);

  //////////////////////
  // spread oprerator //
  //////////////////////

  //const books2 = getBook(1);
  //var { genres } = books2;
  const newGenres = [genres, "epic fantasy"];
  //-- this is an object and new item in one array
  console.log(newGenres);

  const newGenres2 = [...genres, "epic fantasy"];
  //-- this is the items from genres and the new one in one array
  console.log(newGenres2);

  const updatedBook = {
    ...books,
    //-- adding a new property
    moviePublicationDate: "2023-09-23",
    //-- overwriting an existing one
    pages: 1210
  };
  //-- adding some new property to updatedBooks
  console.log(updatedBook);

  //////////////////////
  // template literal //
  //////////////////////

  const summary = `${books.title}, an ${
    books.pages
  }-pages long book, was written by J. R. R. Tolkien and published in ${
    books.publicationDate.split("-")[0]
  }`;
  console.log(summary);

  //////////////////////
  // ternary operator //
  //////////////////////

  function pagesRanges(id) {
    const books = getBook(id);
    const range = books.pages > 1000 ? "over a thousand" : "less than 1000";
    return `"${books.title}" has ${range} pages.`;
  }

  function summary2(id) {
    const books = getBook(id);
    const summary = `${books.title}, a ${
      books.pages
    }-pages long book, was written by J. R. R. Tolkien and published in ${
      books.publicationDate.split("-")[0]
    }. The book has ${
      books.hasMovieAdaptation ? "" : "not "
    }been adopted as a movie.`;
    return summary;
  }

  console.log(summary2(1));
  console.log(pagesRanges(1));

  console.log(summary2(2));
  console.log(pagesRanges(2));

  ////////////////////
  // arrow function //
  ////////////////////

  //var books = getBook(1);
  function getYear(str) {
    return str.split("-")[0];
  }
  console.log(getYear(books.publicationDate));

  const getYear2 = (str) => str.split("-")[0];

  console.log(getYear2(books.publicationDate));

  ////////////////////////////////////////////////////////
  // short-circuiting and logical operators: &&, ||, ?? //
  ////////////////////////////////////////////////////////

  console.log(true && "some string"); // some string --> true
  console.log(false && "some string"); // false

  var adaptation = books.hasMovieAdaptation;
  console.log(adaptation && "This books has a movie."); // This books has a movie. --> true

  books = getBook(2);
  adaptation = books.hasMovieAdaptation;
  console.log(adaptation && "This books has a movie."); // false

  // falsy: nuul, 0, undefined, false

  console.log("robert" && "some string"); // some string --> true
  console.log(0 && "some string"); // 0 --> false

  console.log(true || "some string"); // true --> false
  console.log(false || "some string"); // some string  --> true

  books = getBook(2);
  console.log(books.translations.spanish); // undefined
  const spanishTranlation = books.translations.spanish || "NOT TRANSLATION";
  console.log(spanishTranlation); // NOT TRANSLATION

  books = getBook(1);
  const spanishTranlation2 = books.translations.spanish || "NOT TRANSLATION";
  console.log(books.translations.spanish); // El senor de los anillos
  console.log(spanishTranlation2); // El senor de los anillos

  books = getBook(2);
  console.log(books.reviews.librarything.reviewsCount); // 0
  const countWrong = books.reviews.librarything.reviewsCount || "NO DATA";
  console.log(countWrong); // NO DATA

  books = getBook(1);
  console.log(books.reviews.librarything.reviewsCount); // 452
  const countWrong2 = books.reviews.librarything.reviewsCount || "NO DATA";
  console.log(countWrong2); // 452

  books = getBook(1);
  const count = books.reviews.librarything.reviewsCount ?? "NO DATA";
  console.log(count); // 452 --> because not nullish and undefined

  books = getBook(2);
  books.reviews.librarything.reviewsCount = null;
  const count2 = books.reviews.librarything.reviewsCount ?? "NO DATA";
  console.log(count2); // "NO DATA if first argument are null or undefined"

  ////////////////////////
  // soptional chaining //
  ////////////////////////

  books = getBook(3);
  function getTotalRevieWCount(books) {
    const goodreads = books.reviews.goodreads.reviewsCount;
    //const  librarything = books.reviews.librarything.reviewsCount; // if it is undefined make an errors
    const librarything = books.reviews.librarything?.reviewsCount ?? 0;
    return goodreads + librarything;
  }

  console.log(getTotalRevieWCount(books));

  //////////////////////////
  // the array map method //
  //////////////////////////

  books = getBooks();

  const x = [1, 2, 3, 4, 5].map((el) => el * 2);
  console.log(x);

  const titles = books.map((book) => book.title);
  console.log(titles);

  const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author,
    reviewCount: getTotalRevieWCount(book)
  }));
  console.log(essentialData);

  /////////////////////////////
  // the array filter method //
  /////////////////////////////

  books = getBooks();
  const longBooks = books
    .filter((book) => book.pages > 500)
    .filter((book) => book.hasMovieAdaptation);
  console.log(longBooks);

  const adventureBooks = books
    .filter((books) => books.genres.includes("adventure"))
    .map((book) => book.title);
  console.log(adventureBooks);

  //////////////////////////////
  // the array reduce method //
  /////////////////////////////

  const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
  console.log(pagesAllBooks);

  ///////////////////////////
  // the array sort method //
  ///////////////////////////

  var arr = [3, 7, 1, 9, 6];
  const sorted = arr.sort((a, b) => a - b);
  console.log(arr); // the sort methode mutating the arr array so it is changed too
  console.log(sorted);

  var arr2 = [3, 7, 1, 9, 6];
  const sortedReverse = arr2.sort((a, b) => b - a);
  console.log(arr2); // the sort methode mutating the arr array so it is changed too
  console.log(sortedReverse);

  var arr3 = [3, 7, 1, 9, 6];
  const sorted2 = arr3.slice().sort((a, b) => a - b);
  console.log(arr3); // with slice() method we copy and duplicate arr array another
  console.log(sorted2);

  var arr4 = [3, 7, 1, 9, 6];
  const sortedReverse2 = arr4.slice().sort((a, b) => b - a);
  console.log(arr4); // with slice() method we copy and duplicate arr array another
  console.log(sortedReverse2);

  var sortedBooks = books.slice().sort((a, b) => a.pages - b.pages);
  console.log(sortedBooks);
  sortedBooks = books
    .slice()
    .sort((a, b) => a.pages - b.pages)
    .map((book) => book.pages);
  console.log(sortedBooks);

  ///////////////////////////////////
  // working with immutable arrays //
  ///////////////////////////////////

  // 1) Add book object to array
  const newBook = {
    id: 6,
    title: "Harry Potter and The Chamber of Secrets",
    auther: "J. K. Rowling"
  };
  const booksAfterAdd = [...books, newBook];
  console.log(booksAfterAdd);

  // 2) Delete book object from array
  const booksAfterDelete = books.filter((book) => book.id !== 3);
  console.log(booksAfterDelete);

  // 3) Upate book object in the array
  const booksAfterUpdate = books.map((book) =>
    book.id === 1 ? { ...book, pages: 1300 } : book
  );
  console.log(books.filter((book) => book.id === 1)[0].pages);
  console.log(booksAfterUpdate.filter((book) => book.id === 1)[0].pages);

  /////////////////////////////////////
  // asynchronous jvascript promises //
  /////////////////////////////////////

  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  //   console.log("Anything");

  /////////////////
  // async/await //
  /////////////////

  async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
  }

  //getTodos().then((value) => {console.log(value)});
  const todos = getTodos();
  console.log(todos);
  console.log("Anything");
}
