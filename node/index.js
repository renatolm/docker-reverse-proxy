const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql')
let connection = mysql.createConnection(config)

const sql_insert = `INSERT INTO people(name) values('Renato')`
connection.query(sql_insert)
connection.end()

const sql_select = `SELECT * FROM people`

app.get('/', (req,res) => {


    let response = '<h1>Full Cycle</h1><br>';
    
    response += '<p>People from db:</p><br>';
    
    connection = mysql.createConnection(config)

    connection.query(sql_select, [true], (error, results, fields) => {
        if (error) {
        return console.error(error.message);
        }
        
        for (person of results){            
            response += '<span>'+person.name+'</span><br>';
        }
        
        res.send(response);
    });

    connection.end();

})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})