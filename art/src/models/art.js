const { timeStamp } = require('console');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtSchema = new Schema(
  {
    id: {type: String, required: true},
    cloudinary_id: {type: String, required: true},
    name: {type: String, required: true},
    upload_date: {type: Date, default: Date.now},
    typ: [{type: Schema.Types.ObjectId, ref: 'typ'}]
  }
);

module.exports = mongoose.model('Art', ArtSchema);