import React, { useState, useEffect, useRef } from "react";
import styles from "./chat.module.css";
import Message from "../message/message";
import client from "../../feathers";

interface User {
  id: string;
  email: string;
}

interface Message {
  _id: string;
  text: string;
  createdAt: number;
  userId: string;
  user: User;
  aiPrompt: boolean;
}

interface ChatProps {
  user: User;
}

const Chat: React.FC<ChatProps> = ({ user }) => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const findMessages = async () => {
      const messageData = await client.service("messages").find({
        query: {
          $sort: { createdAt: -1 },
          $limit: 100,
          $or: [{ aiPrompt: false }, { aiPrompt: true, userId: user?.id }],
        },
      });
      setMessages(messageData.data.reverse());
    };

    const updateMessages = (message: Message) => {
      setMessages((messages) => [...messages, message]);
    };

    //event listener for when a message is sent to db
    client.service("messages").on("created", updateMessages);

    findMessages();

    // This will remove the event listener when the component unmounts
    return () => {
      client.service("messages").removeListener("created", updateMessages);
    };
  }, []);

  const handleSendMessage = async () => {
    if (text.trim() !== "") {
      await client.service("messages").create({ text });
      setText("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    (messagesEndRef.current as any)?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.chat}>
      <div className={styles.chat_history}>
        {messages.map((message, index) => {
          if (index % 2 === 0) {
            return (
              <Message
                key={`message_${index}`}
                text={message.text}
                type="sent"
              />
            );
          } else {
            return (
              <Message
                key={`message_${index}`}
                text={message.text}
                type="response"
              />
            );
          }
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.input_container}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
