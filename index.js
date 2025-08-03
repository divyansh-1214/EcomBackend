const express = require("express")
const app = express();
const cors = require('cors');
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');

app.use(cors({
    origin: ['http://localhost:5173'], // your React app
    credentials: true
}));
app.use(express.json())
app.use('/', require('./routes/routes'))
app.use('/user', require('./routes/userRoutes'))
app.use('/product', require('./routes/productRoutes'))
app.use('/cart', require('./routes/cartRoutes'))


mongoose.connect("mongodb+srv://divyanshsri23:z3ykLBWHSWpTN9Ku@cluster0.g2kutff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("connected")
        app.listen(port, () => {
            console.log(port)
        })
    })
    .catch((err) => { console.log(err) })
