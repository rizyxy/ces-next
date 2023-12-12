import styles from './navbar.module.css';

export default function Navbar() {
    return  <nav className={styles.navbar}>
        <div className={styles.left}>
            <img src="/assets/ces-small-logo.png" className={styles.logo} alt=""></img>
            <a href="" className={styles.navItems}>Layanan</a>
            <a href="" className={styles.navItems}>Informasi</a>
            <a href="" className={styles.navItems}>Forum</a>
        </div>
        <div className={styles.right}>
            <a className={styles.loginButton}>Login</a>
        </div>
    </nav>
}