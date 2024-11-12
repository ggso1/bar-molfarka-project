// Ваш токен для бота
const token = '7643771807:AAFNISXPwKvLSF6VJFwCqjcjhXBA5eALGPc';  // Замість цього вставте ваш токен
// ID чату або групи
const chatId = '-4545119175'; // Замість цього вставте username або chat_id групи
const testGroupID='-1002472181316'

// URL для запиту до API
const url = `https://api.telegram.org/bot${token}/getChatMemberCount?chat_id=${chatId}`;
    
function getMemberCount() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                // Вивести кількість учасників
                document.getElementById('memberCount').textContent = data.result;
            } else {
                document.getElementById('memberCount').textContent = 'Помилка при отриманні даних';
            }
        })
        .catch(error => {
            console.error('Error fetching member count:', error);
            document.getElementById('memberCount').textContent = 'Не вдалося отримати дані';
        });
}

// Виклик функції для отримання кількості учасників
getMemberCount();
