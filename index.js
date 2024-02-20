const express = require('express');

const app = express();

//app.method(path, handler);
// app.use("/", (req, res, next) => {
//     res.send('Hello World');
// })

app.get("/", (req, res) => {
    res.send("Hello Get method");
})

app.post("/", (req, res) => {
    res.send("Hello post method");
})

app.listen(4000, () =>{
    console.log('Server berhasil di running di port 4000');
})