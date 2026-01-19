import express from "express";
import { engine } from "express-handlebars";

const app = express();


app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');


app.use(express.static('src'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/bistro', (req, res) => {
  res.render('bistro');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/event', (req, res) => {
  res.render('event');
});

app.listen(5080, () => {
  console.log('server kör på http://localhost:5080')
});

