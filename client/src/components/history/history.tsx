import React from "react";
import styles from "./history.module.css";

interface HistoryProps {
  messages: string[];
}

const History: React.FC<HistoryProps> = ({ messages }) => {
  return (
    <div className={styles.history}>
      <div className={styles.historyTitle}>Chat History</div>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
