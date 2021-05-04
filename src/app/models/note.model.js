const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  notes: {
    type: Object,
    required: true, //depends on whether the field is mandatory or not
  },
});

module.exports = mongoose.model("Note", NoteSchema);
