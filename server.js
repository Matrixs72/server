const express = require('express');
const app = express();

// Render передаёт порт через переменную окружения
const PORT = process.env.PORT || 3000;

// Главная страница
app.get('/', (req, res) => {
  res.send('Привет! Сервер работает корректно 🚀');
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

// Запуск сервера
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на порту ${PORT}`);
});


