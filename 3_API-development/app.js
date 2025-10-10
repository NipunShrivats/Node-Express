import express from "express";
const app = express();

// middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: "book 1",
  },
  {
    id: 2,
    title: "book 2",
  },
];

//intro
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore api",
  });
});

//get all books
app.get("/get", (req, res) => {
  res.json(books);
});

//get single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(202).json({ message: "Book not found!" });
  }
});

// add a new book
app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: `New Book added successfully`,
  });
});

// update a book
app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id === Number(req.params.id)
  );

  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    res.status(200).json({
      message: `Book with Id ${req.params.id} is successfully updated`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: `Book not found`,
    });
  }
});

// delete a book
app.delete("/delete/:id", (req, res) => {
  const bookIndex = books.findIndex(
    (item) => item.id === Number(req.params.id)
  );
  if (bookIndex !== -1) {
    const bookName = books[bookIndex].title;
    const deletedBook = books.splice(bookIndex, 1);
    res.status(200).json({
      message: `${bookName} has been deleted successfully`,
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: `Book not found`,
    });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
