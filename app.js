const express = require('express')
const app = express()
const port = 3000;


app.set('view engine', 'hbs');
//Servir contenido Estatico
app.use( express.static('public') )
/*
se cambian los enlaces del HTML por los de la ruta del servidor. 
*/

//como mandamos argumentos con handlebars? 
// el render, recibe un 2do argumentos con lo que se 
// quiera renderizar.


app.get('/hbs', (req, res)=> {
    res.render('home', {
      nombre: 'Emanuel',
      titulo: 'Curso Node'
    })
})

app.get('/generic', (req, res)=> {
    //  http://localhost:3000/generic
    res.sendFile( __dirname + '/public/generic.html')
});

app.get('/elements', (req, res)=> {
    //  http://localhost:3000/generic
    res.sendFile( __dirname + '/public/elements.html')
});

app.get('*', (req, res)=>{
  
  //mostrar un elemento desde una peticion
  res.send('404 | NOT FOUND')
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})