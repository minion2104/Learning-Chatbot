
// Get the HTML elements
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");
const suggestions = document.querySelectorAll(".suggestion");


// Function to display messages in the chat
function displayMessage(message, className) {

    const messageDiv = document.createElement("div");

    messageDiv.className = className;
    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Function to generate chatbot responses
function getBotResponse(question) {

    const text = question.toLowerCase().trim();

    if (text.includes("hello") || text.includes("hi")) {

        return "Hello! Welcome to LearnBot. What would you like to learn today?";

    }

    else if (text.includes("java")) {

        return "Java is a popular object-oriented programming language. It is used to develop web applications, mobile applications, and desktop software.";

    }

    else if (text.includes("python")) {

        return "Python is a beginner-friendly programming language known for its simple syntax. It is widely used in automation, artificial intelligence, and data science.";

    }

    else if (text.includes("sql")) {

        return "SQL stands for Structured Query Language. It is used to store, retrieve, update, and manage data in relational databases.";

    }

    else if (text.includes("html") && text.includes("css")) {

        return "HTML is used to create the structure of a webpage, while CSS is used to style it with colours, layouts, fonts, and spacing.";

    }

    else if (text.includes("html")) {

        return "HTML stands for HyperText Markup Language. It is used to create the structure and content of web pages.";

    }

    else if (text.includes("css")) {

        return "CSS stands for Cascading Style Sheets. It is used to style web pages by controlling colours, fonts, spacing, and layouts.";

    }

    else if (text.includes("artificial intelligence") || /\bai\b/.test(text)) {

        return "Artificial Intelligence (AI) is a technology that enables machines to perform tasks that usually require human intelligence, such as learning, problem-solving, and decision-making.";

    }

    else if (text.includes("machine learning")) {

        return "Machine Learning is a branch of Artificial Intelligence that allows computers to learn from data and make predictions without being explicitly programmed for every task.";

    }

    else if (text.includes("data science")) {

        return "Data Science is the process of collecting, analysing, and interpreting data to discover useful information and support decision-making.";

    }

    else if (text.includes("cloud computing")) {

        return "Cloud Computing provides services such as storage, databases, and computing power over the internet.";

    }

    else if (text.includes("object-oriented programming") || /\boops?\b/.test(text)) {

        return "Object-Oriented Programming (OOP) is a programming approach based on classes and objects. Its four main concepts are Encapsulation, Inheritance, Polymorphism, and Abstraction.";

    }

    else if (text.includes("thank")) {

        return "You're welcome! Keep learning and exploring new topics.";

    }

    else {

        return "I'm still learning about that topic! You can ask me about Java, Python, SQL, HTML, CSS, Artificial Intelligence, Machine Learning, Data Science, or Cloud Computing.";

    }
}


// Function to send a message
function sendMessage() {

    const message = userInput.value.trim();

    // Check whether the input is empty
    if (message === "") {
        return;
    }

    // Display the user's message
    displayMessage(message, "user-chat");

    // Get the chatbot's reply
    const botReply = getBotResponse(message);

    // Display the chatbot's reply
    displayMessage(botReply, "bot-chat");

    // Clear the input box
    userInput.value = "";

    // Focus on the input box again
    userInput.focus();
}


// Send message when the Send button is clicked
sendBtn.addEventListener("click", sendMessage);


// Send message when Enter is pressed
userInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Handle suggested questions
suggestions.forEach(function(button) {

    button.addEventListener("click", function() {

        userInput.value = button.getAttribute("data-question");

        sendMessage();

    });

});
