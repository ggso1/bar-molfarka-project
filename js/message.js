const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let messages = []; // Масив для зберігання останніх 5 повідомлень

// Підключаємо body-parser для отримання JSON запитів
app.use(bodyParser.json());

// API для отримання останніх 5 повідомлень
app.get('/getMessages', (req, res) => {
    res.json(messages); // Відправляємо останні 5 повідомлень
});

// Обробник для отримання повідомлень від Telegram бота
app.post('/webhook', (req, res) => {
    const message = req.body.message.text;

    if (message) {
        // Додаємо нове повідомлення на початок масиву
        messages.unshift(message);

        // Зберігаємо тільки останні 5 повідомлень
        if (messages.length > 5) {
            messages.pop(); // Видаляємо зайве
        }
    }

    res.sendStatus(200); // Відповідь Telegram API
});

// Запускаємо сервер
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const setWebhook = async () => {
    const webhookUrl = 'https://yourdomain.com/webhook'; // Замість цього вставте свій URL
    const url = `https://api.telegram.org/bot${botToken}/setWebhook?url=${webhookUrl}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
        console.log('Webhook set successfully');
    } else {
        console.error('Error setting webhook:', data);
    }
};

setWebhook();
