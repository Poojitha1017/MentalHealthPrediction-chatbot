// Event listener for the login button
document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login validation (you can replace this with real authentication)
    if (username && password) {
        alert('Login successful!'); // Simulate successful login
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('chat-container').style.display = 'flex';
    } else {
        alert('Please enter both username and password.');
    }
});

// Event listener for the registration button
document.getElementById('register-button').addEventListener('click', function() {
    const regEmail = document.getElementById('reg-email').value;
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;

    // Simple registration validation (you can replace this with real registration logic)
    if (regUsername && regPassword) {
        alert('Registration successful! You can now log in.');
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
});

// Show the registration form
document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

// Show the login form
document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Event listener for the send button in the chatbot
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value;

    if (userMessage.trim() === '') return;

    // Display user message
    displayMessage(userMessage, 'user');

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 1000);

    // Clear input
    userInput.value = '';
});

// Function to display messages in the chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (sender === 'bot' ? 'bot-message' : 'user-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to get bot responses based on user input
function getBotResponse(userMessage) {
    // Normalize user input to lowercase for matching
    const normalizedInput = userMessage.toLowerCase();

    // Define a list of keywords and their responses
    const responses = {
        "bipolar disorder": "Bipolar disorder is a mental health condition characterized by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression).",
        "symptoms of bipolar disorder": "Symptoms include mood swings, changes in sleep patterns, energy levels, and behavior. During manic phases, individuals may feel overly energetic or euphoric.",
        "how to manage bipolar disorder": "Managing bipolar disorder typically involves medication, therapy, and lifestyle changes. Regular follow-ups with a healthcare provider are essential.",
        "what is depression?": "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It can affect how you feel, think, and handle daily activities.",
        "what are the symptoms of depression?": "Common symptoms include feelings of sadness, hopelessness, loss of interest in activities, changes in appetite, sleep disturbances, and difficulty concentrating.",
        "how does depression affect you?": "Depression can affect your physical health, relationships, and ability to work or study. It can lead to a range of emotional and physical problems.",
        "how to overcome depression?": "Overcoming depression often involves a combination of therapy, medication, lifestyle changes, and support from friends and family. It's important to seek professional help.",
        "what is anxiety?": "Anxiety is a feeling of worry, nervousness, or fear about something with an uncertain outcome.",
        "what are the symptoms of anxiety?": "Symptoms include restlessness, rapid heartbeat, sweating, trembling, and difficulty concentrating.",
        "how does anxiety affect you?": "Anxiety can interfere with daily activities, relationships, and overall quality of life. It can lead to physical health issues if not managed.",
        "how to overcome anxiety?": "Overcoming anxiety may involve therapy, medication, relaxation techniques, and lifestyle changes. It's important to consult a healthcare professional."
    };

    // Check if the user message matches any of the keywords
    for (const key in responses) {
        if (normalizedInput.includes(key)) {
            return responses[key];
        }
    }

    return "I'm sorry, I don't have an answer for that."; // Default response if no match is found
}