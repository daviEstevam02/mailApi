const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))

app.listen(3000, ()=>{
    console.log('api listening ok')
})