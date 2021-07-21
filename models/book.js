import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
 Book
}

const bookSchema = new Schema({
    title: String, 
    read: false,
}, {
    timestamps: true,
    })

const Book = mongoose.model("Book", bookSchema)
