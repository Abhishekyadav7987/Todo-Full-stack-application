const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:7987037305@cluster0.gtmye.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}