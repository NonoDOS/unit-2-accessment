import { Book } from "../models/book.js"

export{
    index,
    newBook as new,
    create,
    show,
    edit,
    update,
    deleteBook as delete,
}
function update(req, res) {
  req.body.read = !!req.body.read
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(() => {
    res.redirect(`/books/${book._id}`)
  })
  .catch((err) => {
    console.log(err)
    res.redirect(`/books`)
  })
}
function deleteBook(req, res) {
    Book.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/books")
    })
    .catch(err => {
      console.log(err)
      res.redirect("/books")
    })
  }
  function edit(req, res) {
    Book.findById(req.params.id)
    .then((book) => {
      res.render("books/edit", {
        book,
        title: "Edit the Book",
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/books")
    })
  }

function show (req,res){
    Book.findById(req.params.id)
    .then(book => {
        res.render("books/show",{
            book,
            title: "Book show"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/books")
      })
}
function create(req, res) {
    req.body.read = !!req.body.read
    Book.create(req.body)
    .then(() => {
      res.redirect("/books")
    })
    .catch(err => {
      console.log(err)
      res.redirect("/books")
    })
  }
function newBook(req, res) {
    res.render("books/new", {
      title: "Add a Book"
    })
  }

function index (req,res){
    Book.find({})
    .then(books =>{
        res.render("books/index",
        {
            books,
            title: "Book List"
        })
    })
        .catch(err => {
          console.log(err)
          res.redirect("/books")
        })
    }
