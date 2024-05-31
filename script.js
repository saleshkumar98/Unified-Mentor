// script.js

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;
    if (messageText.trim() === '') {
        return;
    }
    const chatMessages = document.getElementById('chat-messages');

    // Create a new message div
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'sent');

    // Create the message text
    const messageContent = document.createElement('p');
    messageContent.textContent = messageText;

    // Create the time span
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('time');
    timeSpan.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Append the content to the message div
    newMessage.appendChild(messageContent);
    newMessage.appendChild(timeSpan);

    // Append the new message to the chat messages
    chatMessages.appendChild(newMessage);

    // Clear the input field
    messageInput.value = '';

    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function openChat(contactId) {
    // Logic to open a chat can be implemented here
    console.log('Opening chat for:', contactId);
}
