import React from "react";
import styles from "./message.module.css";

interface MessageProps {
  text: string;
  type: string;
}

const Message: React.FC<MessageProps> = ({ text, type }) => {
  return (
    <div className={`${styles.message__container} ${styles[type]}`}>
      <span>{text}</span>
    </div>
  );
};

export default Message;
