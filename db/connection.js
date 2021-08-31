const mongoose = require("mongoose");
//connection to mongodb atlas server
mongoose.connect('mongodb+srv://sayam786:sayam786@cluster0.luowj.mongodb.net/bankingAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("mongodb connected");
})
