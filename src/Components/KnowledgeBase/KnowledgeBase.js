import React, { useEffect, useState } from "react";
import styles from "./KnowledgeBase.module.css";

const KnowledgeBase = ({ resolution, language }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const fetchTranslatedText = async () => {
      try {
        // If language is English, no need to fetch the translation API
        if (language === "en") {
          setTranslatedText(resolution?.text);
          return;
        }

        // Make API call to fetch translation if language is not English
        const response = await fetch("http://localhost:5000/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: resolution?.text,
            language: language,  // Pass the language to the API
          }),
        });

        const data = await response.json();
        setTranslatedText(data.translatedText);
      } catch (error) {
        console.error("Error fetching translated text:", error);
      }
    };

    if (resolution?.text && language) {
      fetchTranslatedText();
    }
  }, [resolution?.text, language]);

  return (
    <div className={styles.knowledgeBase}>
      <h4 className={styles.heading}>Recommendation From Knowledge Base</h4>
      <div className={styles.descriptionBox}>
        {translatedText ? <p>{translatedText}</p> : <p>Description will be shown here!</p>}
      </div>
    </div>
  );
};

export default KnowledgeBase;