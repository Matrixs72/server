const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware для логов
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Статические файлы (картинки, стили, скрипты)
app.use('/static', express.static(path.join(__dirname, 'public')));

// Главная страница с меню
app.get('/', (req, res) => {
  res.send(`
    <h1>🍴 Мини‑магазин</h1>
    <p>Выберите категорию:</p>
    <ul>
      <li><a href="/pizza">Заказ пиццы</a></li>
      <li><a href="/sushi">Заказ суши</a></li>
    </ul>
  `);
});

// Страница заказа пиццы
app.get('/pizza', (req, res) => {
  res.send(`
    <h1>🍕 Заказ пиццы</h1>
    <img src="/static/pizza.jpg" alt="Пицца" width="300"/>
    <p>Цена: 250 грн</p>
    <label>Количество: <input id="qty" type="number" value="1"/></label>
    <button onclick="calc()">Рассчитать</button>
    <p id="result"></p>
    <script>
      function calc() {
        const qty = document.getElementById('qty').value;
        const price = 250;
        document.getElementById('result').innerText =
          'Итого: ' + (qty * price) + ' грн';
      }
    </script>
    <p><a href="/">⬅ Назад в меню</a></p>
  `);
});

// Страница заказа суши
app.get('/sushi', (req, res) => {
  res.send(`
    <h1>🍣 Заказ суши</h1>
    <img src="/static/sushi.jpg" alt="Суши" width="300"/>
    <p>Цена: 180 грн</p>
    <label>Количество: <input id="qty" type="number" value="1"/></label>
    <button onclick="calc()">Рассчитать</button>
    <p id="result"></p>
    <script>
      function calc() {
        const qty = document.getElementById('qty').value;
        const price = 180;
        document.getElementById('result').innerText =
          'Итого: ' + (qty * price) + ' грн';
      }
    </script>
    <p><a href="/">⬅ Назад в меню</a></p>
  `);
});

// Health check
app.get('/healthz', (req, res) => {
  res.send('OK');
});

// 404
app.use((req, res) => {
  res.status(404).send('<h1>404</h1><p>Страница не найдена</p>');
});

// Запуск
app.listen(PORT, () => {
  console.log(`✅ Магазин запущен на порту ${PORT}`);
});
