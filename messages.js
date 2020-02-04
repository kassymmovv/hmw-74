const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req,res) => {

    try {
        const files = fs.readdirSync('./messages').reverse();
        const count = files.length < 5 ? files.length : 5;
        const array  = [];
        for(let i = 0; i < count; i++) {
            const file = fs.readFileSync('./messages/' + files[i]);
            array.push(JSON.parse(file.toString()))
        }
        res.send(array)
    } catch (e) {
        console.log(e);
    }

});

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