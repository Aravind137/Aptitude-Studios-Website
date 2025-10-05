const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 8083;
const path = require('path');
const cors = require('cors');

const bodyParse = require('body-parser');

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

const transporter = nodemailer.createTransport({
    secure: false,
    service: 'gmail',//smtp.gmail.com  //in place of service use host...
    secure: false,//true
    port: 25,//465
    auth: {
        user: 'studioaptitude@gmail.com',
        pass: 'ezbo lxfw amut crwa',
    }, tls: {
      rejectUnauthorized: false
    }
});


app.post('/contactus', function (req, res, next) {
    const mailOptions = {
        from: 'studioaptitude@gmail.com',  // sender address
        to:  'vijaykanth2694@gmail.com', //'info@aptitudestudios.in',   // list of receivers
        subject: 'Sending Email from website',
        text: `fullName: ${req?.body?.fullName} \nmobile: ${req?.body?.mobile} \nemail: ${req?.body?.email} \nmessage: ${req?.body?.message}`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
        console.log("information", info);
        if (err) {
            res.status(500).json({error: "Error Found"});
        } else {
            res.status(200).json({message: "Successfully sent!"});
        }
    });
});

app.use('/', express.static('dist/ap-demo'));
app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,'dist/ap-demo/index.html'));
});

app.listen(port, () => {
    console.log('app is started and listening to the port: ', port);
})