import React, { useState, useEffect } from 'react';
import { getCertificates } from '../utils/certificateUtils';

const CertificatesGrid = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const loadedCertificates = getCertificates();
    setCertificates(loadedCertificates);
  }, []);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedCertificate(null);
  };

  return (
    <div className="certificates-card">
      <h3>Certificates</h3>
      <div className="divider"></div>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="certificate-grid-item" 
            onClick={() => handleCertificateClick(cert)}
          >
            <img 
              src={cert.path} 
              alt={cert.title} 
              className="certificate-thumbnail"
            />
            <div className="certificate-overlay">
              <h4>{cert.title}</h4>
              {cert.organization && <p>{cert.organization}</p>}
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal for enlarged certificate */}
      <div 
        className={`certificate-modal ${selectedCertificate ? 'show' : ''}`} 
        onClick={handleCloseModal}
      >
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <span className="close-button" onClick={handleCloseModal}>&times;</span>
          {selectedCertificate && (
            <img 
              src={selectedCertificate.path} 
              alt={selectedCertificate.title} 
              className="certificate-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatesGrid;
