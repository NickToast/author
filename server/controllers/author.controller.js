const Author = require('../models/author.model')

module.exports = {
    allAuthors: (req,res) => {
        Author.find().sort({key:1})
            .then(authors => {
                res.json(authors)
            })
            .catch(err => console.log(err))
    },

    getOneAuthor: (req,res) => {
        Author.findOne({_id: req.params.id})
            .then(author => {
                res.json(author)
            })
            .catch(err=>console.log(err))
    },
    newAuthor: (req,res) => {
        Author.create(req.body)
            .then(newAuthor => {
                res.json(newAuthor)
            })
            .catch(err=> {
                res.status(400).json(err)
            })
    },
    updateAuthor: (req,res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
            .then(author => {
                res.json(author)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    },
    deleteAuthor: (req,res) => {
        Author.deleteOne({_id: req.params.id})
            .then(author => {
                res.json(author)
            })
            .catch(err => {
                res.json(err)
            })
    }
}