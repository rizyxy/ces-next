import styles from './bills.module.css'

export default function Page() {
    return <>
        <section className={styles.vehicleData}>
            <h2>Data Kendaraan</h2>
            <div className={styles.vdataItem}>
                <p  className={styles.vdataTitle}>Nama Pemilik</p>
                <p  className={styles.vdataValue}>Mukhammad Rizki</p>
            </div>
            <div  className={styles.vdataItem}>
                <p  className={styles.vdataTitle}>NIK Pemilik</p>
                <p  className={styles.vdataValue}>082111633057</p>
            </div>
            <div  className={styles.vdataItem}>
                <p  className={styles.vdataTitle}>Model Kendaraan</p>
                <p  className={styles.vdataValue}>Aventador</p>
            </div>
            <div  className={styles.vdataItem}>
                <p  className={styles.vdataTitle}>Merk Kendaraan</p>
                <p  className={styles.vdataValue}>Lamborghini</p>
            </div>
            <div  className={styles.vdataItem}>
                <p  className={styles.vdataTitle}>Tahun Kendaraan</p>
                <p  className={styles.vdataValue}>2014</p>
            </div>
        </section>

        <section className={styles.bills}>
            <h2>Rincian Tagihan</h2>
            <div className={styles.billItem}>
                <p className={styles.billTitle}>Pajak</p>
                <p className={styles.billValue}>Rp 100.000.000</p>
            </div>
            <div className={styles.billItem}>
                <p className={styles.billTitle}>Biaya Admin</p>
                <p className={styles.billValue}>Rp 100.000</p>
            </div>
            <hr></hr>
            <div className={styles.billItem}>
                <p className={styles.billTitle}>Total</p>
                <p className={styles.billValue}>Rp 100.100.000</p>
            </div>
            <button className={styles.payButton}>
                <p>Bayar</p>
            </button>
        </section>
    </>
}