import { Router } from 'express'
const router = Router()

export { 
  router
}

/* GET home page. */
router.get('/',(res,req) => res.redirect('/books'))
