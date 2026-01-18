import express from "express";
import fs from "fs/promises";

const app = express();

app.use(express.static('src'));

app.get('/', async (req, res) => {
res.send('Servern kör!');
});

app.listen(5080, () => {
  console.log('server kör på http://localhost:5080')
});

