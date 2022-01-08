// call requirement
const express = require('express');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');


// declare requirement
const port = 3000;
const app = express();



// use requirement after declare
app.set('view engine', 'ejs');
app.use(cors());
app.use(expressLayouts);
app.use(express.static('public'));



// routing handle 
app.get('/', (req, res) => {
    res.render('page/index', {
        layout: 'layouts/main-layout',
        title : 'Home',
    });
});


app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404 Not Found</h1>');
});


app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});