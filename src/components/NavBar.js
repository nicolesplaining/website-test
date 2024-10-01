import Link from 'next/link';
import styles from './NavBar.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h3>Nicole Ma</h3>
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="#portfolio">Portfolio</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
            <div className={styles.ctaSection}>
                <a
                href="https://www.linkedin.com/in/ma06nicole"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinIcon}
                >
                <FaLinkedin size={22.5} />
                </a>

                <a
                href="mailto:manicole@stanford.edu"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mailIcon}
                >
                <FaEnvelope size={26} />
                </a>
                <Link href="/signup" className={styles.ctaButton}>Resume (PDF)</Link>
            </div>
        </nav>
  );
};

export default NavBar;