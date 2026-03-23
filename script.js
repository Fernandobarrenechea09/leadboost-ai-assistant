const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Function to display a message
function addMessage(text, sender="bot") {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("my-2", "p-2", "rounded");
  if(sender === "user") {
    msgDiv.classList.add("bg-blue-500", "text-white", "self-end");
  } else {
    msgDiv.classList.add("bg-gray-200", "self-start");
  }
  msgDiv.textContent = text;
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
}

// Simulate initial greeting
addMessage("¡Hola! Gracias por contactar con LeadBoost. ¿Buscas comprar o rentar una propiedad?");

// Handle sending messages
sendBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if(text === "") return;
  addMessage(text, "user");
  input.value = "";
  
  // Placeholder bot reply (we will replace later with real flow)
  setTimeout(() => {
    addMessage("Procesando tu respuesta...");
  }, 500);
});

input.addEventListener("keypress", (e) => {
  if(e.key === "Enter") sendBtn.click();
});
