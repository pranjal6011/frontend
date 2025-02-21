import React from "react";
import styles from "./KnowledgeBase.module.css";

const KnowledgeBase = ({ resolutions }) => {
  console.log(resolutions);
  return (
    <div className={styles.knowledgeBase}>
      <h4>Recommendation From Knowledge Base</h4>
      <div className={styles.ticketList}>
        {resolutions.length === 0 ? (
          <p>Resolutions will be shown here!</p>
        ) : (
          resolutions.map((resolution, index) => (
            <div key={index} className={styles.ticketCard}>
              <h3>Doc Name: {resolution.docName}</h3>
              <p><strong>Page Number:</strong> {resolution.pageNumber}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default KnowledgeBase;
