var express = require('express');
var pg = require('pg');

var app = express();



app.get('/crearTabla', (req,res)=>{
    const cliente = new pg.Client('postgres://api:123@db:5432/postgres');
    var query = 'CREATE TABLE articulo ( id_articulo bigserial primary key, nombre_articulo varchar(20) NOT NULL, fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);';
    cliente.connect((connectionErr) =>{
        if(connectionErr){
            res.send("Error" +JSON.stringify(connectionErr))
        }else{
            cliente.query(query,(queryErr, results) =>{
                if(queryErr){
                    res.send("Error 1" +JSON.stringify(queryErr))
                }else{
                    res.send(JSON.stringify(results.rows))
                }
            });
        }
    })
})

app.get('/insertar', (req,res)=>{
    const cliente = new pg.Client('postgres://api:123@db:5432/postgres');
    var query = 'insert into articulo(nombre_articulo) values(\'Manzana\');';
    cliente.connect((connectionErr) =>{
        if(connectionErr){
            res.send("Error" +JSON.stringify(connectionErr))
        }else{
            cliente.query(query,(queryErr, results) =>{
                if(queryErr){
                    res.send("Error 1" +JSON.stringify(queryErr))
                }else{
                    res.send(JSON.stringify(results.rows))
                }
            });
        }
    })
})
app.get('/', (req, res)=> {
    const cliente = new pg.Client('postgres://api:123@db:5432/postgres');
    var query = 'SELECT * FROM ARTICULO;';
    cliente.connect((connectionErr) =>{
        if(connectionErr){
            res.send("Error" +JSON.stringify(connectionErr))
        }else{
            cliente.query(query,(queryErr, results) =>{
                if(queryErr){
                    res.send("Error 1" +JSON.stringify(queryErr))
                }else{
                    res.send(JSON.stringify(results.rows))
                }
            });
        }
    })
    
})

app.listen(80,() => {
    console.log('Servidor en puerto 80');
});