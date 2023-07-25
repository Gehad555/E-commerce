const express = require('express');
const app = express();
const router = express.Router();
require('./config/db')
const api = require('./routes/api') 

const port = 3000

app.use(express.json())

app.use('/users' ,api )

app.listen(port , ()=>{
    console.log(`Server Runing on http://localhost${port}`)
})
