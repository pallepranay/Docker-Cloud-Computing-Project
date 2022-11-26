/* NAME: PALLE PRANAY REDDY */
/* ROLLNO: S20200010159 */
/* SERVICE -1 APP.JS */


const express = require('express')
const app = express()

const mongoose = require('mongoose')
let url="mongodb://<link>";

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

/* --------------------------------- */
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Succesfully Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

const NumSchema = {
number:{type: Number},
};

const Num = mongoose.model("Num", NumSchema);


app.set("view engine", "ejs");

/* --------------------------------- */

app.get("/", function(req, res){
    answer=req.query.msg;
    if(answer){
    const number = new Num({
        number: answer,
    });

    number.save(function (err) {
        if (err) {
            throw err;
        } else {
            res.send('Entered '+answer)
        }
    });}else{
        res.send("Not defined")
    }
  
});

/* --------------------------------- */

app.listen(5000, function(){
  console.log(">>>>> APP IS SUCCESSFULLY RUNNING ON PORT 5000 <<<<");
});

/* END OF THE PROGRAM */
