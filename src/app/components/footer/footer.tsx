import styles from './footer.module.css'

export default function Footer() {
    return  <footer className={styles.footer}>
    <img src="/assets/ces-logo.png" alt=""></img>
    <div className={styles.tools}>
        <a href="" className={styles.tool}>FAQ</a>
        <a href="" className={styles.tool}>TENTANG KAMI</a>
        <a href="" className={styles.tool}>KONTAK</a>
    </div>
    <div className={styles.tools}>
        <a href="" className={styles.tool}>Kantor Korlantas</a>
        <a href="" className={styles.tool}>Kebijakan Privasi</a>
        <a href="" className={styles.tool}>Panduan</a>
    </div>
    </footer>   
}