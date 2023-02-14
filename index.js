const chatForm = document.getElementById("chatform");
const chatLogs = document.getElementById("chatlogs");
const userInput = document.getElementById("user-input");

// Load chat history from local storage
const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
for (const chat of chatHistory) {
  const chatbotResponse = document.createElement("div");
  chatbotResponse.id = "chatbot-response";
  
  const responseMessage = document.createElement("p");