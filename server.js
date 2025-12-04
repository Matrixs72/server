// server.js
const express = require('express'); 
const app = express();
// Render передаёт порт через переменную окружения 
const PORT = process.env.PORT || 3000;
// Главная страница 
app.get('/', (req, res) => { res.send('Привет! Сервер затраХал'); });
// Запуск сервера 
app.listen(PORT, () => { console.log(); });


