const sendBtn = document.querySelector('.sendtg-btn');
const feedbackInput = document.getElementById('feedback');
const feedbackSent = document.querySelector('.feedback-sent');

sendBtn.addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Use the textarea's value, or fallback to its placeholder if empty
    const textToSend = feedbackInput.value.trim() || feedbackInput.placeholder;

    // Encode the message text for URL
    const encodedText = encodeURIComponent(textToSend);
    const groupID='7643771807'
    const testGroupID='4569045241'


    // Define the Telegram Bot API URL with chat_id and encoded message text
    const url = `https://api.telegram.org/bot${testGroupID}:AAFNISXPwKvLSF6VJFwCqjcjhXBA5eALGPc/sendMessage?chat_id=-4545119175&text=${encodedText}`;
    
    // Use fetch to send the HTTP GET request
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Message sent:", data);
            // Clear the textarea after the message is sent
            feedbackInput.value = '';
            feedbackSent.innerHTML='Пророцтво збулось!'
        })
        .catch(error => console.error("Error sending message:", error));
});

feedbackInput.addEventListener('click', (event) => {
    feedbackSent.innerHTML=''

});