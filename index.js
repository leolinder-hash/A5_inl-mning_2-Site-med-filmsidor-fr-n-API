import express from "express";
import { engine } from "express-handlebars";

const app = express();

const MENU = [
  { label: 'Hem', path: '/' },
  { label: 'Filmer', path: '/movies' },
  { label: 'Event', path: '/event' },
  { label: 'Bistro', path: '/bistro' },
  { label: 'Om oss', path: '/about' },
  { label: 'Kontakta oss', path: '/contact'}
]


app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');


app.use(express.static('src'));

app.get('/', (req, res) => {
  res.render('home', { menu: MENU });
});


app.get('/about', (req, res) => {
  res.render('about', { menu: MENU });
});

app.get('/bistro', (req, res) => {
  res.render('bistro', { menu: MENU });
});

app.get('/contact', (req, res) => {
  res.render('contact', { menu: MENU });
});

app.get('/event', (req, res) => {
  res.render('event', { menu: MENU });
});

app.listen(5080, () => {
  console.log('server kör på http://localhost:5080')
});

