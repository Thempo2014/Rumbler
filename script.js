const chatMessages = {
    general: [],
    gaming: [],
    coding: []
};

function selectServer(server) {
    document.getElementById('server-name').innerText = server.charAt(0).toUpperCase() + server.slice(1);
    displayMessages(server);
}

function displayMessages(server) {
    const chatContainer = document.getElementById('chat-messages');
    chatContainer.innerHTML = '';
    chatMessages[server].forEach(msg => {
        const msgElement = document.createElement('div');
        msgElement.innerText = msg;
        chatContainer.appendChild(msgElement);
    });
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value;
    const server = document.getElementById('server-name').innerText.toLowerCase();
    if (message.trim()) {
        chatMessages[server].push(`You: ${message}`);
        displayMessages(server);
        input.value = '';
        setTimeout(() => {
            aiResponse(server);
        }, 1000); // AI response delay
    }
}

function aiResponse(server) {
    const aiMessages = [
        "Hello! How can I assist you today?",
        "That's interesting!",
        "Can you tell me more?",
        "I agree!",
        "Absolutely!",
        "I'm here to help!"
    ];
    const randomMessage = aiMessages[Math.floor(Math.random() * aiMessages.length)];
    chatMessages[server].push(`AI: ${randomMessage}`);
    displayMessages(server);
}

document.addEventListener('DOMContentLoaded', () => {
    selectServer('general');
});
