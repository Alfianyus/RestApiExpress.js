const express = require('express');

const usersRoutes = require('./routes/users');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);


app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json({
        name:"alfian",
        email:"alfian@gmail.com"
    });
})

app.post("/", (req, res) => {
    res.send("Hello post method");
})

app.listen(4000, () =>{
    console.log('Server berhasil di running di port 4000');
})