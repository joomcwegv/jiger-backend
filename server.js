const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Разрешаем запросы с фронта
app.use(express.json()); // Работа с JSON

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Иван' },
    { id: 2, name: 'Мария' },
    { id: 3, name: 'Пётр' }
  ]);
});

app.post('/api/contact', (req, res) => {
  const { name, message } = req.body;
  console.log(`📬 Сообщение от ${name}: ${message}`);
  res.status(201).json({ success: true });
});

app.listen(port, () => {
  console.log(`🚀 Backend запущен на порту ${port}`);
});