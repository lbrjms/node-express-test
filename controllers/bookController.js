var Book = require("../models/book");
var Author = require("../models/author");
var Genre = require("../models/genre");
var BookInstance = require("../models/bookinstance");

// const { body, validationResult } = require("express-validator");

var async = require("async");
async function getBook() {
  return await  Book.countDocuments({})
}
exports.index = async function (req, res) {
const c = await  Book.countDocuments({})
      // res.render("index", {
      //   title: "Local Library Home",
      //   error: false,
      //   data: {
      //     book_count:c
      //   },
      // });
  Promise.all(
    [
        Book.countDocuments({}),
        BookInstance.countDocuments({}),
        BookInstance.countDocuments({ status: "Available" }),
        Author.countDocuments({}),
        Genre.countDocuments({})
    ]).then(
    function (a) {

      // book_count: function (callback) {
      //   Book.countDocuments({}, callback);
      // },
      // book_instance_count: function (callback) {
      //   BookInstance.countDocuments({}, callback);
      // },
      // book_instance_available_count: function (callback) {
      //   BookInstance.countDocuments({ status: "Available" }, callback);
      // },
      // author_count: function (callback) {
      //   Author.countDocuments({}, callback);
      // },
      // genre_count: function (callback) {
      //   Genre.countDocuments({}, callback);
      // },

      res.render("index", {
        title: "Local Library Home",
        error: false,
        data: {book_count:a[0],book_instance_count:a[1],book_instance_available_count:a[2],author_count:a[3],genre_count:a[4]},
      });
    }
  );
};


// 显示完整的book列表
exports.book_list =  (req, res) => { 

//  const results = await 
 Book.find({}, 'title author')
  .populate('author')
  .exec().then((results)=>{
    res.render('book_list', { title: 'Book List', book_list: results });

  })

// if (err) { 
//     // res.render('book_list', { title: 'Book List', book_list: err });
      
//       return next(err);
//      }
    //Successful, so render
    // res.render('book_list', { title: 'Book List', book_list: results });
 };

// 为每位book显示详细信息的页面
exports.book_detail = (req, res) => { res.send('未实现：book详细信息：' + req.params.id); };

// 由 GET 显示创建book的表单
exports.book_create_get = (req, res) => { res.send('未实现：book创建表单的 GET'); };

// 由 POST 处理book创建操作
exports.book_create_post = (req, res) => { res.send('未实现：创建book的 POST'); };

// 由 GET 显示删除book的表单
exports.book_delete_get = (req, res) => { res.send('未实现：book删除表单的 GET'); };

// 由 POST 处理book删除操作
exports.book_delete_post = (req, res) => { res.send('未实现：删除book的 POST'); };

// 由 GET 显示更新book的表单
exports.book_update_get = (req, res) => { res.send('未实现：book更新表单的 GET'); };

// 由 POST 处理book更新操作
exports.book_update_post = (req, res) => { res.send('未实现：更新book的 POST'); };

