const express = require("express"),
        PORT = 300,
        ejs      = require('ejs'),
        app = express();

app.set("view engine" , "ejs");
app.use(express.static("public"));

app.get("/home" , async(req , res)=>{
    res.render('home');
});

app.listen(PORT , ()=>{
    console.log(`Server start Running on PORT:${PORT}`);
});