import express from "express";
import { engine } from "express-handlebars";

const app = express();

const MENU = [
  { id: 'home', label: 'Hem', path: '/' },
  { id: 'movies', label: 'Filmer', path: '/movies' },
  { id: 'event', label: 'Event', path: '/event' },
  { id: 'bistro', label: 'Bistro', path: '/bistro' },
  { id: 'about', label: 'Om oss', path: '/about' },
  { id: 'contact', label: 'Kontakta oss', path: '/contact' }
]

app.engine('hbs',
  engine({
    extname: '.hbs',
    helpers: {
      eq(a, b) {
        return a === b;
      }
    }
  }
  ));

app.set('view engine', 'hbs');
app.set('views', './views');


app.use(express.static('src'));

app.get('/', (req, res) => {
  res.render('home', {
    menu: MENU,
    currentPage: 'home'
  });
});

app.get('/movies', async (req, res) => {
  const response = await fetch(
    'https://plankton-app-xhkom.ondigitalocean.app/api/movies'
  );

  const result = await response.json();

  res.render('movies', {
    movies: result.data,
    menu: MENU,
    currentPage: 'movies'
  });
});

app.get('/movies/:id', async (req, res) =>{
  const {id} = req.params;

  const response = await fetch(
    `https://plankton-app-xhkom.ondigitalocean.app/api/movies/${id}`
  );

  const result = await response.json();
  const imageURL = result.data.attributes.image?.url ?? null;

  res.render('movie', {
    movie: result.data,
    imageURL: imageURL,
    menu: MENU,
    currentPage: 'movie'
  });
})

app.get('/about', (req, res) => {
  res.render('about', {
    menu: MENU,
    currentPage: 'about'
  });
});

app.get('/bistro', (req, res) => {
  res.render('bistro', {
    menu: MENU,
    currentPage: 'bistro'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    menu: MENU,
    currentPage: 'contact'
  });
});

app.get('/event', (req, res) => {
  res.render('event', {
    menu: MENU,
    currentPage: 'event'
  });
});

app.listen(5080, () => {
  console.log('server kör på http://localhost:5080')
});

