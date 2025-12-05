const express = require('express');
const path = require('path');
const app = express();

// Render передаёт порт через переменную окружения
const PORT = process.env.PORT || 3000;

// Middleware: логирование
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Главная страница с меню
app.get('/', (req, res) => {
  res.send(`
    <h1>Главная страница</h1>
    <p>Добро пожаловать на мой сервер 🚀</p>
    <nav>
      <ul>
        <li><a href="/about">О проекте</a></li>
        <li><a href="/contact">Контакты</a></li>
        <li><a href="/api/users">API: Пользователи</a></li>
      </ul>
    </nav>
  `);
});

// Страница "О проекте"
app.get('/about', (req, res) => {
  res.send('<h1>О проекте</h1><p>Этот сервер создан на Express и работает на Render.</p>');
});

// Страница "Контакты"
app.get('/contact', (req, res) => {
  res.send('<h1>Контакты</h1><p>Святик: sviatik04112012@gmail.com</p>');
});

// API: список пользователей
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Святик' }
  ]);
});

// Health check
app.get('/healthz', (req, res) => {
  res.send('OK');
});

// 404 обработка
app.use((req, res) => {
  res.status(404).send('<h1>404</h1><p>Страница не найдена</p>');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на порту ${PORT}`);
});

