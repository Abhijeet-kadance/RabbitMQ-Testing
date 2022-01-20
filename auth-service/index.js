const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 7070;
const mongoose = require("mongoose")
const user = require('./model/user')

mongoose.connect('mongodb://localhost/auth-service',()=>{
    console.log("Connected");
});
const db = mongoose.connection;
db.on("error", (error) => {
    console.log("Error: ", error)
})

db.once("open", ()=> {
    console.log("open database")

    user.insertMany({id: "dsjd", userName: "shivam"})

})
const MyModel = mongoose.model('Test', new mongoose.Schema({ name: String }));
MyModel.findOne(function(error, result) { /* ... */ });


app.use(express.json());
app.listen(PORT,()=>{
    console.log(`Auth-service runing at ${PORT}`);
})