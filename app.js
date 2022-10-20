const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 3000;


//Handlebar

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Servir contenido Estatico
app.use( express.static('public') )
/*
se cambian los enlaces del HTML por los de la ruta del servidor. 
*/

//como mandamos argumentos con handlebars? 
// el render, recibe un 2do argumentos con lo que se 
// quiera renderizar.


app.get('/', (req, res)=> {
    res.render('home', {
      nombre: 'Emanuel',
      titulo: 'Curso Node'
    })
})

app.get('/generic', (req, res)=> {
    //  http://localhost:3000/generic
    res.render('generic', {
      nombre: 'Emanuel',
      titulo: 'Curso Node'
    })
});

app.get('/elements', (req, res)=> {
    //  http://localhost:3000/generic
    res.render('elements', {
      nombre: 'Emanuel',
      titulo: 'Curso Node'
    })
});

app.get('*', (req, res)=>{
  
  //mostrar un elemento desde una peticion
  res.send('404 | NOT FOUND')
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})