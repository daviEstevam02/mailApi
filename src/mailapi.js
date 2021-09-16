const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(cors());

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))

app.post("/sendmail", async (req, res) => {
    const transporter = nodemailer.createTransport({
        host:"smtp-relay.sendinblue.com",
        port:587,
        auth:{
            user:process.env.USER,
            pass:process.env.PASS,
        },
    })

    transporter.sendMail({
        from: process.env.USER,
        to: process.env.USER,
        subject:req.body.name,
        text: `
            <div> ${req.body.message}</div>
         `

    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    })
});

app.listen(3000, ()=>{
    console.log('api listening ok')
})