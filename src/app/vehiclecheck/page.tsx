import styles from './vehiclecheck.module.css'

export default function Page() {
    return <section className={styles.payment}>
        <h1>Pembayaran Pajak</h1>
        <form action="./bills.html" className={styles.payForm}>
            <div className={styles.formItem}>
                <label className={styles.formLabel} htmlFor='Provinsi'>Provinsi</label>
                <input type="text" name="Provinsi" id="" className={styles.formInput} placeholder="Provinsi"></input>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formLabel} htmlFor="kota">Kota</label>
                <input type="text" name="Kota" id="" className={styles.formInput} placeholder="Kota"></input>
            </div>
            <div className={styles.formItem}>
                <label className={styles.formLabel} htmlFor="nopol">Nomor Polisi</label>
                <input type="text" name="Nopol" id="" className={styles.formInput} placeholder="Nopol"></input>
            </div>
            <button type="submit" className={styles.payButton}>
                <p>Cek</p>
            </button>
        </form>
    </section>
}