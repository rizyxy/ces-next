import styles from './invoice.module.css'
styles.invoiceItem
export default function Page() {
    return <>
        <section className={styles.invoice}>
            <h2>Invoice Pembayaran</h2>
            <p className={styles.status}>Belum Terbayarkan</p>

            <div className={styles.invoiceItems}>
                <div className={styles.invoiceItem}>
                    <p className={styles.invoiceTitle}>Nama Pemilik</p>
                    <p className={styles.invoiceValue}>Mukhammad Rizki</p>
                </div>
                <div className={styles.invoiceItem}>
                    <p className={styles.invoiceTitle}>NIK Pemilik</p>
                    <p className={styles.invoiceValue}>082111633057</p>
                </div>
                <div className={styles.invoiceItem}>
                    <p className={styles.invoiceTitle}>Model Kendaraan</p>
                    <p className={styles.invoiceValue}>Aventador</p>
                </div>
                <div className={styles.invoiceItem}>
                    <p className={styles.invoiceTitle}>Merk Kendaraan</p>
                    <p className={styles.invoiceValue}>Lamborghini</p>
                </div>
                <div className={styles.invoiceItem}>
                    <p className={styles.invoiceTitle}>Tahun Kendaraan</p>
                    <p className={styles.invoiceValue}>2014</p>
                </div>
                <div className={styles.invoiceItem}>
                    <p className={styles.invoiceTitle}>Tagihan</p>
                    <p className={styles.invoiceValue}>Rp 100.100.000</p>
                </div>
                <div className={styles.invoiceItem}>
                    <p className={styles.invoiceTitle}>Virtual Account</p>
                    <p className={styles.invoiceValue}>xxxxxxxxxxxxxx</p>
                </div>
            </div>
        </section>
    </>
}