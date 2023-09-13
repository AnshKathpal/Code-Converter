const mongoose = require("mongoose")

const codeSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
      },
      generatedLanguage : {
        type: String,
      },
      generatedCode: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }


})

const codeModel = mongoose.model("Code", codeSchema)

module.exports = codeModel;
