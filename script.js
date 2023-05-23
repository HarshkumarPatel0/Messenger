document.getElementById("send-button").addEventListener("click", function() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
      var messagesContainer = document.getElementById("messages");
      var newMessage = document.createElement("div");
      newMessage.className = "message outgoing";
      var messageContent = document.createElement("div");
      messageContent.className = "message-content";
      var messageText = document.createElement("p");
      messageText.textContent = message;
      messageContent.appendChild(messageText);
      newMessage.appendChild(messageContent);
      messagesContainer.appendChild(newMessage);
      messageInput.value = "";
    }
  });
  