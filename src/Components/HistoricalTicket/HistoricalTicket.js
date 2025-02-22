import React, { useState } from "react";
import styles from "./HistoricalTicket.module.css";

const HistoricalTicket = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const openModal = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeModal = () => {
    setSelectedTicket(null);
  };

  return (
    <div className={styles.knowledgeBase}>
      <h4>Recommendation From Historical Tickets</h4>
      <div className={styles.ticketList}>
        {tickets && tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <div key={index} className={styles.ticketCard} onClick={() => openModal(ticket)}>
              <h3>{ticket.Title}</h3>
              <p><strong>Number:</strong> {ticket.Number}</p>
              <p><strong>Priority:</strong> {ticket.Priority}</p>
              <p><strong>Category:</strong> {ticket.Category}</p>
              <p><strong>Country:</strong> {ticket.Merged_Country}</p>
            </div>
          ))
        ) : (
          <p>Tickets will be shown here!</p>
        )}
      </div>

      {selectedTicket && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>✖</button>
            <h2>{selectedTicket.Title}</h2>
            <hr/>
            <p><strong>Number:</strong> {selectedTicket.Number}</p>
            <p><strong>Priority:</strong> {selectedTicket.Priority}</p>
            <p><strong>Category:</strong> {selectedTicket.Category}</p>
            <p><strong>SubCategory:</strong> {selectedTicket.Merged_Subcategory || "N/A"}</p>
            <p><strong>ThirdCategory:</strong> {selectedTicket.Merged_Thirdcategory || "N/A"}</p>
            <p><strong>Country:</strong> {selectedTicket.Merged_Country || "N/A"}</p>
            <p><strong>City:</strong> {selectedTicket.City}</p>
            <p><strong>Requested For:</strong> {selectedTicket.RequestedFor}</p>
            <p><strong>Assigned To:</strong> {selectedTicket.AssignedTo || "Unassigned"}</p>
            <p><strong>Assignment Group:</strong> {selectedTicket.AssignmentGroup}</p>
            <p><strong>Legal Entity:</strong> {selectedTicket.LegalEntity}</p>
            {/* <p><strong>Description:</strong> {selectedTicket.Description || "No description available"}</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoricalTicket;