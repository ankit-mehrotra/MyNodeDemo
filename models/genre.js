var mongoose = require('mongoose');

var genreScheme = mongoose.Schema({
name:{
    type: String,
    require: true
},
create_date :{
    type: Date,
    default: Date.now
},
});

var Genre = module.exports = mongoose.model('Genre', genreScheme);

//get genres

module.exports.getGenres = function(callback,limit){
    Genre.find(callback).limit(limit);
}

//add genre

module.exports.addGenre = function(genre,callback){
    Genre.create(genre,callback);
}

module.exports.updateGenre = function(id,genre,options,callback){
    var query = {_id:id};
    var update = {
        name:genre.name
    }
    Genre.findOneAndUpdate(query,update,options,callback);
}

//delete genre

module.exports.deleteGenre = function(id,callback){
    var query = {_id:id};
    Genre.remove(query,callback);
}