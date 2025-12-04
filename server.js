const express = require('express');
const path = require('path');
const app = express();

// Render передаёт порт через переменную окружения
const PORT = process.env.PORT || 3000;

// Middleware для логов
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware для JSON
app.use(express.json());

// Статические файлы (например, index.html, стили, картинки)
app.use('/static', express.static(path.join(__dirname, 'public')));

// Главная страница
app.get('/', (req, res) => {
  res.send('Привет! Сервер работает 😊');
});

// Health check для Render
app.get('/healthz', (req, res) => {
  res.send('OK');
});

// Пример API: возвращаем список пользователей
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Святик' }
  ]);
});

// Пример POST‑запроса
app.post('/api/echo', (req, res) => {
  res.json({
    received: req.body,
    message: 'Данные успешно получены!'
  });
});

// Обработка 404
app.use((req, res) => {
  res.status(404).send('Страница не найдена');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
