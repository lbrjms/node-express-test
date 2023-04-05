const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {type:String,required:true}
})

// 虚拟属性'url'：作者 URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('GenreSchema',GenreSchema)