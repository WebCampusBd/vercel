// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

app.get("/", (req,res)=>{
    res.status(200).send("<h1 align='center'>Hello This is me Ratul Anjum</h1>")
})

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));