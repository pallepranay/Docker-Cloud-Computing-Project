/* NAME: PALLE PRANAY REDDY */
/* ROLLNO: S20200010159 */
/* SERVICE -2 APP.JS */

const express=require("express");
const mongoose = require("mongoose");
const app = express();
const url = "mongodb://<link>";

/* --------------------------------- */

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

/* --------------------------------- */

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('SuccessfullyConnected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

const NumSchema = {
        number:{type: Number},
};

/* --------------------------------- */

const Num = mongoose.model("Num", NumSchema);
app.get("/",function(req,res){
    Num.find({}).then((values)=>{
        const answer=[];
        for(let i=0;i<values.length;i++){
            var newData = values[i].number;
            answer.push(newData);
        }
        if(answer.length==0){
            res.send("0");
        }
        var val=0;
        for(let i=0;i<answer.length;i++){
            val+=answer[i];
        }
        val=val/answer.length;
        res.send(val.toFixed(4));
    })
})

/* --------------------------------- */

app.listen(8000, function () {
    console.log(">>>> APP IS SUCCESSULLY RUNNING ON PORT 8000 <<<<");
});

/* --------------------------------- */
/* END OF THE PROGRAM */
