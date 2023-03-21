import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (data) => {
      debugger
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("message", message);
    debugger
    setMessage("");
  };

  return (
    <div>
      <h1>Chat App</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
