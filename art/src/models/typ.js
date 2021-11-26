var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TypSchema = new Schema(
  {
    name: {type: String, required: true},
  }
);

module.exports = mongoose.model('Typ', TypSchema);