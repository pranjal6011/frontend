import React from "react";
import styles from "./KnowledgeBase.module.css";

const KnowledgeBase = ({ resolution }) => {
  return (
    <div className={styles.knowledgeBase}>
      <h4 className={styles.heading}>Recommendation From Knowledge Base</h4>
      <div className={styles.descriptionBox}>
        {resolution?.text ? <p>{resolution.text}</p> : <p>Description will be shown here!</p>}
      </div>
    </div>
  );
};

export default KnowledgeBase;
