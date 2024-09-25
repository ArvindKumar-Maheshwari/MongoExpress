const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection successful");
}).catch(
    (err) => console.log(err)
);

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from : "neha",
//     to : "priya",
//     msg : "send me your exam sheet",
//     created_at : new Date()
// });

let Allchats = [{
    from : "neha",
    to : "priya",
    msg : "send me your exam sheet",
    created_at : new Date()
},
{
    from : "shruti",
    to : "aniket",
    msg : "VP operation",
    created_at : new Date()
},
{
    from : "rohit",
    to : "mohit",
    msg : "teach me JS callback",
    created_at : new Date()
},
{
    from : "tony",
    to : "peter",
    msg : "bring me some fruit",
    created_at : new Date()
},

]

Chat.insertMany(Allchats);

