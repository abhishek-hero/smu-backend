const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    education: { type: String, required: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('smu-user', userSchema)