const express = require('express')
require('dotenv').config();
const router = express.Router();
const port = 3001;
const connection = require('./database')
const apiRoutes = require('./routes/api')
const app = express();
app.use(express.json())

app.use('/admin', (req, res)=>{
    res.send("Hello World!");
})

app.use('/api', apiRoutes);

app.all('*', (req, res)=>{
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server`
    })
})

app.listen(port, ()=>{
    console.log("server running at port " + port)
})
