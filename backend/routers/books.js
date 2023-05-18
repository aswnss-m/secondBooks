const router = require('express').Router()
const Books = require("../models/Books.model")

router.route('/').get((req,res)=>{
    Books.find().then(books => res.json(books)).catch(err => res.status(400).json("Error" + err));
})