import React, { useState, useEffect } from "react";
import "./styles.css";
import Message from "./components/Message";
import MessageForm from "./components/MessageForm";

import db from "./config";

export default function App() {
  const [username, setUsername] = useState("Patryk");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.ref("/messages").on("value", (snapshot) => {
      const fbMessages = snapshot.val();
      const convertedMessages = Object.entries(fbMessages || {}).map(
        ([id, message]) => ({
          ...message,
          id
        })
      );
      setMessages(convertedMessages);
    });
  }, []);
  const handleContentChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      user: username,
      content: newMessage,
      datetime: Date.now()
    };
    if (newMessage) {
      db.ref("/messages")
        .push(messageObj)
        .then(() => setNewMessage(""));
    }
  };
  // const messages = [
  //   { id: 12, user: "Patryk", content: "Hej", datetime: Date.now() },
  //   { id: 24, user: "Ania", content: "Ho", datetime: Date.now() },
  //   { id: 67, user: "Patryk", content: "Lublin", datetime: Date.now() }
  // ];
  return (
    <div className="App">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <MessageForm
        message={newMessage}
        username={username}
        handleSubmit={handleSubmit}
        handleUsernameChange={handleUsernameChange}
        handleContentChange={handleContentChange}
      />
    </div>
  );
}
