
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");
const welcome = document.getElementById("welcome");
const newChat = document.getElementById("newChat");

function addMessage(text, sender) {
    const message = document.createElement("div");
    message.className = "message " + sender;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const question = input.value.trim();

    if (!question) return;

    welcome.style.display = "none";

    addMessage(question, "user");

    input.value = "";

    const reply = "Hey! I'm Atlas. My chat interface is working! My AI brain still needs to be connected. What would you like to explore?";

    setTimeout(function() {
        addMessage(reply, "atlas");
    }, 500);
});

newChat.addEventListener("click", function() {
    messages.innerHTML = "";
    welcome.style.display = "block";
});
