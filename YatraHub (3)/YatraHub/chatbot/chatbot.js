function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hey')) {
        return 'Hello, I am Eila. How can I help you today?';
    } else if (lowerCaseMessage.includes('weather')) {
        return 'I’m not sure about the current weather. Please check a weather website.';
    }  else if (lowerCaseMessage.includes('thank you')) {
        return 'You’re welcome! Feel free to ask more questions.';
    } else if (lowerCaseMessage.includes("best time to visit india")) {
        return "October to March is the best time for pleasant weather and fewer crowds.";
    } else if (lowerCaseMessage.includes("suggest best ancient artifacts")) {
        return "The Taj Mahal, the Hawa Mahal, and the Qutub Minar are iconic ancient artifacts.";
    } else if (lowerCaseMessage.includes("suggest unique cultural palace")) {
        return "The City Palace in Udaipur is a stunning cultural gem.";
    } else if (lowerCaseMessage.includes("recommend some luxury hotel")) {
        return "The Oberoi Udaivilas in Udaipur and the Taj Mahal Palace in Mumbai are excellent luxury hotels.";
    } else {
        return 'Sorry, I did not understand that. Could you please rephrase?';
    }
}

function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    if (userMessage.trim() === '') return;

    const chatBox = document.getElementById('chatBox');
    const clientMsgDiv = document.createElement('div');
    clientMsgDiv.classList.add('message', 'client-message');
    clientMsgDiv.textContent = userMessage;
    chatBox.appendChild(clientMsgDiv);


    const botResponse = getBotResponse(userMessage);
    const serverMsgDiv = document.createElement('div');
    serverMsgDiv.classList.add('message', 'server-message');
    serverMsgDiv.textContent = botResponse;
    chatBox.appendChild(serverMsgDiv);

    
    document.getElementById('userMessage').value = '';
}