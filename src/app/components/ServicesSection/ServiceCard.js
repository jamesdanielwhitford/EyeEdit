'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`${styles['service-card']} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles['service-icon']}>{service.icon}</div>
      <h3 className={styles['service-title']}>{service.title}</h3>
      <p className={styles['service-description']}>{service.description}</p>

      <ul className={`${styles['service-features']} ${isExpanded ? styles.visible : ''}`}>
        {service.features.map((feature, index) => (
          <li key={index} className={styles['service-feature-item']}>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={styles['service-toggle-btn']}
        onClick={toggleExpand}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Show Less' : 'Learn More'}
      </button>
    </section>
  );
};

export default ServiceCard;
