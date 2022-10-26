const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const data = require("./data/datas.json")


app.get('/', (req, res) =>{
    res.send('edu care api running')
})
app.get('/datas', (req, res) =>{
    res.send(data)
})
app.get('/datas/:id', (req, res) =>{
    const id = req.params.id;
    const course = data.find((course) => course.id === id)
    res.send(course)
})

app.listen(port, () =>{
    console.log('edu-care-server running on port', port);
})