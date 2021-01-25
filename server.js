const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'crud'
});

app.use(bodyParser.urlencoded({extended: true}))

app.post('/create', (req,res) => {

    const CategoryId = req.body.CategoryId
    const CategoryName = req.body.CategoryName

    db.query(
        'INSERT INTO categorymaster (CategoryId, CategoryName) VALUES (?,?)', 
        [CategoryId, CategoryName],
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send("values inserted")
            }
        }
    ); 
});

app.get('/categories', (req, res) => {
    db.query("SELECT * FROM categorymaster", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})

app.put('/update', (req, res) => {
    const id = req.body.id
    db.query("UPDATE categorymaster SET")
})


app.listen(3001, () => {
    console.log('Server running on port 3001');
});