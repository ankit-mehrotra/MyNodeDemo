var mongoose = require('mongoose');

var bookScheme = mongoose.Schema({
title:{
    type: String,
    require: true
},
create_date :{
    type: Date,
    default: Date.now
},
genre:{
    type: String,
    require: true
},
description:{
    type: String,

},
publisher:{
    type: String,
    
},
pages:{
    type: String,
    
},
image_url:{
    type: String,
    require: true
},
});

var Book = module.exports = mongoose.model('Book', bookScheme);

//get books

module.exports.getBooks = function(callback,limit){
    Book.find(callback).limit(limit);
}


//get book

module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
}

module.exports.addBook = function(book,callback){
    Book.create(book,callback);
}

//update book

module.exports.updateBook = function(id,book,options,callback){
    var query = {_id:id};
    var update = {
        title:book.title
    }
    Book.findOneAndUpdate(query,update,options,callback);
}

module.exports.deleteBook = function(id,callback){
    var query = {_id:id};
    Book.remove(query,callback);
}