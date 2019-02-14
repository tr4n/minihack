const express = require('express'); 

const app  = express(); 

app.use(express.static('public')); 
app.use('/', (request, response) => {
    response.sendFile(__dirname + "/public/html/index.html");
})

//CRUD




app.listen(8080, (error) => {
    console.log(error|| "server success, port: 8080"); 
})