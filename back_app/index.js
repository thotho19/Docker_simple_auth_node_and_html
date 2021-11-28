//========
// Package Importing section
//========
require("dotenv").config();
const express = require('express'),
    PORT = process.env.PORT,
    cors = require("cors"),
    app = express();



//--------
// CORS CFG 
//--------
corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//========
// Middleware 
//========
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Project Route
app.post("/login", async (req, res) => {
    const USER_NAME = process.env.USER_NAME,
        USER_PASSWORD = process.env.USER_PASSWORD;

    // Get client user & password
    const { user, password } = req.body;
    console.log(user,password);
    // Compare with database
    if (user != USER_NAME || password != USER_PASSWORD)
        return res.status(401).json({
            "successful": false,
            "type": "auth",
            "message": "Invalid User Name & Password ... please try again",
            "data": null
        })
    else
        return res.status(200).json({
            "successful": true,
            "type": "auth",
            "message": "User logged in",
            "data": {
                "token": "This_is_not_JWT_:D"
            }
        })
})


app.listen(PORT, () => {
    console.log(`Server Start running on PORT:${PORT}`);
})