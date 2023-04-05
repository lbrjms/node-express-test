var BookInstance = require("../models/bookinstance");

exports.book_instance_list = (req,res) => {
    BookInstance
    .find()
    .populate('book')
    .exec()
    .then(results=>{
        res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: results });
    })
}