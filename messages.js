const express = require('express');
const router = express.Router();
const fs = require('fs');
const message = './messages';



router.post('/',(req,res) => {
    const date = new Date().toISOString();
const name = `${date}.txt`;
    const fileName = `./messages/${name}`;
    const key = "datetime";
    const values = fileName;
    req.body[key] = values;
   const data = JSON.stringify(req.body);
    //
    fs.writeFile(fileName,data, err => {
        if (err){
            console.log(err);
        }else {
            console.log('File was saved!')
        }
    });

   console.log(req.body);
    res.send(req.body)
});

module.exports = router;