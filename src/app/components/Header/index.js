import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles['header-container']}`}>
        <div className={styles.logo}>
          <span>EyeEdit</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}>
              <a href="#services" className={styles['nav-link']}>
                Services
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href="#testimonials" className={styles['nav-link']}>
                Testimonials
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href="#pricing" className={styles['nav-link']}>
                Pricing
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href="#contact" className={styles['nav-link']}>
                Contact
              </a>
            </li>
            <li className={styles['nav-item']}>
              <a href="#faq" className={styles['nav-link']}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
