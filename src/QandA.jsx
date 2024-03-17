// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './QandA.css'; // Import the CSS file

const QandA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { question: 'What is Netsensor?', answer: 'Jio NetSensor is a security service that detects all network traffic hitting its network interfaces and maintains its logs. These data are utilised by end-user for actionable insights on its dashboards. The service is highly scalable, has low compute and medium interaction honey pot with powerful analytics.' },
    { question: 'What are advantages of netsensor?', answer: 'The service has many advantages, to list few :Detects attack signatures and payloads that traditional tools may not be able to captureDetects network leaks across business environmentProvides insight on possible network leaks and insider threat in environmentsFully managed backend with intuitive dashboards & alerting to improve TATs Strengthen your business security posture with Highly scalable, low-cost offering' },
    { question: 'How does netsensor perform Detect Attacks?', answer: 'The NetSensor platform monitors its decoys deployed across business environment. The decoys are highly scalable and extremely low in compute requirements. The decoy mimics commonly attacked applications and services and tap in the network traffic reaching its network interfaces. The traffic is logged and sent to the backend for further analysis and enrichment. The alerts are presented to the end-user in easy, actionable dashboards for perusal.' },
    { question: 'What are major Business segments that opt for NetSensor?', answer: 'NetSensor is used across all segments: Small-Medium Businesses (SMBs), large enterprises and government organizations who host and work on multiple application platforms.' },
  ];


  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <h2 className="center-heading">Still have questions? Check JioNetsensor FAQ!</h2>
      <div className="accordion">
        {data.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-question" onClick={() => toggleAnswer(index)}>
              {item.question}
            </div>
            <div className={`accordion-answer ${activeIndex === index ? 'active' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default QandA;
