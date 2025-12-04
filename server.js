// server.js

const express = require('express');
const app = express();
const port = 3000;

// Главная страница
app.get('/', (req, res) => {
  res.send('Привет! Сервер работает 😊');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});