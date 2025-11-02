import React from 'react';
import './ChatbotModal.css';

const ChatbotModal = ({ onClose }) => {
  return (
    <div className="chatbot-overlay">
      <div className="chatbot-modal">
        <div className="chatbot-header">
          <h3>AI Financial Assistant</h3>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="chatbot-content">
          <div className="coming-soon-message">
            <div className="ai-icon">🤖</div>
            <h4>AI Integration Coming Soon!</h4>
            <p>
              Our intelligent financial assistant will help you navigate the 7 Baby Steps, 
              track your progress, set personalized goals, and provide expert guidance 
              tailored to your unique financial situation.
            </p>
            <div className="features-preview">
              <h5>What you can expect:</h5>
              <ul>
                <li>Personalized financial diagnosis</li>
                <li>Smart goal setting and tracking</li>
                <li>Real-time progress monitoring</li>
                <li>Expert tips and recommendations</li>
                <li>24/7 financial guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;