const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

//middlewares
// esto facilita que los datos lleguen desde el body
app.use(express.urlencoded({extended: false}));

//import routs
app.use(require('./src/routes'));


app.listen(app.set('port'), () => {
    console.log('server levantado en puerto 3000');
});