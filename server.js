const express = require('express');
const path = require('path');
const app = express();

// Render передаёт порт через переменную окружения
const PORT = process.env.PORT || 3000;

// Middleware: логирование запросов
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware: парсинг JSON
app.use(express.json());

// Статические файлы (например, HTML, CSS, JS в папке public)
app.use('/static', express.static(path.join(__dirname, 'public')));

// --- Страницы ---
app.get('/', (req, res) => {
  res.send('<h1>Главная страница</h1><p>Добро пожаловать на мой сервер 🚀</p>');
});

app.get('/about', (req, res) => {
  res.send('<h1>О проекте</h1><p>Этот сервер создан на Express и работает на Render.</p>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Контакты</h1><p>Святик: sviatik04112012@gmail.com</p>');
});

// --- API ---
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Святик' }
  ]);
});

app.post('/api/echo', (req, res) => {
  res.json({
    received: req.body,
    message: 'Данные успешно получены!'
  });
});

// --- Health check ---
app.get('/healthz', (req, res) => {
  res.send('OK');
});

// --- 404 обработка ---
app.use((req, res) => {
  res.status(404).send('<h1>404</h1><p>Страница не найдена</p>');
});

// --- Запуск сервера ---
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на порту ${PORT}`);
});




