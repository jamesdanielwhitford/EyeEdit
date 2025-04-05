import ServiceCard from './ServiceCard';
import styles from './styles.module.css';

const services = [
  {
    id: 1,
    title: 'Academic Editing',
    description:
      'Polish your research papers, journal articles, dissertations, and theses. Ensure your academic work meets the highest standards of clarity and precision.',
    icon: '📚',
    features: [
      'Grammar and syntax correction',
      'Academic style and formatting',
      'Citation and reference checking',
      'Clarity and coherence improvement',
    ],
  },
  {
    id: 2,
    title: 'Business Editing',
    description:
      'Enhance your professional documents, reports, presentations, and marketing materials. Communicate with impact and achieve your business objectives.',
    icon: '💼',
    features: [
      'Business document polishing',
      'Brand voice consistency',
      'Clear messaging development',
      'Presentation and speech editing',
    ],
  },
  {
    id: 3,
    title: 'Proofreading',
    description:
      'Catch those last-minute errors before publication or submission. A final review to ensure your document is error-free and ready to impress.',
    icon: '🔍',
    features: [
      'Grammar and spelling checks',
      'Punctuation verification',
      'Consistency in formatting',
      'Final quality assurance',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className={`section ${styles['services-section']}`} id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className={styles['services-intro']}>
          I offer professional editing services tailored to your specific needs, whether you&apos;re
          an academic researcher, business professional, or international student looking to perfect
          your writing.
        </p>

        <div className={styles['services-grid']}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
