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
              <button className={styles['nav-link']}>Services</button>
            </li>
            <li className={styles['nav-item']}>
              <button className={styles['nav-link']}>Testimonials</button>
            </li>
            <li className={styles['nav-item']}>
              <button className={styles['nav-link']}>Pricing</button>
            </li>
            <li className={styles['nav-item']}>
              <button className={styles['nav-link']}>Contact</button>
            </li>
            <li className={styles['nav-item']}>
              <button className={styles['nav-link']}>FAQ</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
