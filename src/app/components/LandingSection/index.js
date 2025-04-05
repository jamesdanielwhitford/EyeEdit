import styles from './styles.module.css';
import Image from 'next/image';

const LandingSection = () => {
  return (
    <section className={styles['landing-section']} id="home">
      <div className={styles['landing-content']}>
        <h1 className={styles['landing-title']}>Athena</h1>
        <h2 className={styles['landing-tagline']}>Enhance, Elevate, Empower</h2>

        <p className={styles['landing-bio']}>
          Professional editing services for academic and business professionals. With over 10 years
          of experience, I help clients communicate with clarity, confidence, and precision.
        </p>

        <div className={styles['landing-cta']}>
          <button className="btn">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>

      <div className={styles['avatar-container']}>
        <Image
          src="/images/athena.jpeg"
          alt="Editor Athena"
          className={styles['avatar-image']}
          width={1182}
          height={665}
        />
      </div>
    </section>
  );
};

export default LandingSection;
