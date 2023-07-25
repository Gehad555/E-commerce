const express = require('express');
const app = express();
const router = express.Router();
require('./config/db')
const userRouter = require('./routes/UserRouter') 

const port = 3000



app.use(express.json())

app.use('/user' , userRouter)



app.listen(port , ()=>{
    console.log(`Server Runing on http://localhost${port}`)
})
