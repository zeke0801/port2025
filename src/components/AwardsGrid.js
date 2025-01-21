import React, { useState, useEffect } from 'react';
import { getAwards } from '../utils/awardsUtils';

const AwardsGrid = () => {
  const [awards, setAwards] = useState([]);
  const [selectedAward, setSelectedAward] = useState(null);

  useEffect(() => {
    const loadedAwards = getAwards();
    setAwards(loadedAwards);
  }, []);

  const handleAwardClick = (award) => {
    setSelectedAward(award);
  };

  const handleCloseModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedAward(null);
  };

  return (
    <div className="awards-card">
      <h3>Awards & Credentials</h3>
      <div className="divider"></div>
      <div className="awards-grid">
        {awards.map((award) => (
          <div key={award.id} className="award-item" onClick={() => handleAwardClick(award)}>
            <h4>{award.title}</h4>
            <div className="award-details" style={{ textAlign: 'center' }}>
              <span>{award.issuer}</span>
              <span className="bullet">•</span>
              <span>Issued in {award.date}</span>
            </div>
            <button className="view-certificate-btn">
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Modal for viewing certificate */}
      <div className={`award-modal ${selectedAward ? 'show' : ''}`} onClick={handleCloseModal}>
        <div className="modal-content">
          <span className="close-button" onClick={handleCloseModal}>&times;</span>
          {selectedAward && (
            <img 
              src={selectedAward.certificateImage} 
              alt={selectedAward.title} 
              className="award-certificate-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AwardsGrid;
