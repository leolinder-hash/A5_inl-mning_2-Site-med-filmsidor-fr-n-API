import express from "express";
import fs from "fs/promises";

const app = express();

app.use(express.static('src'));

async function renderPage (page) {
const layout = await fs.readFile('./templates/layout.html', 'utf-8');
const content = await fs.readFile(`./content/${page}.html`, 'utf-8');

const html = layout.replace('::content::', content);
return html;
}

app.get('/', async (req, res) => {
const html = await renderPage('home');
res.send(html);
});

app.get('/about', async (req, res) => {
const html = await renderPage('about');
res.send(html);
});

app.get('/bistro', async (req, res) => {
const html = await renderPage('bistro');
res.send(html);
});

app.get('/contact', async (req, res) => {
const html = await renderPage('contact');
res.send(html);
});

app.get('/event', async (req, res) => {
const html = await renderPage('event');
res.send(html);
});

app.listen(5080, () => {
  console.log('server kör på http://localhost:5080')
});

