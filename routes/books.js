import { Router } from 'express'
import * as booksCtrl from "../controllers/books.js"
const router = Router()


// localhost:3000/books
router.get('/', booksCtrl.index)
// localhost:3000/books/new
router.get('/new', booksCtrl.new)
// localhost:3000/books/idOfbook
router.get('/:id', booksCtrl.show)
// localhost:3000/books POST
router.post('/', booksCtrl.create)
// localhost:3000/books/:id EDIT
router.get('/:id/edit', booksCtrl.edit)
// localhost:3000/books/:id UPDATE
router.put('/:id', booksCtrl.update)
// localhost:3000/books/:id DELETE
router.delete('/:id', booksCtrl.delete)

export {
  router
}