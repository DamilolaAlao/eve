const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    notes: {
      type: Object,
      required: true, //depends on whether the field is mandatory or not
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);
