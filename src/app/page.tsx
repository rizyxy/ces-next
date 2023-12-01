import styles from './home.module.css';

export default function Home() {
  return <>
        <section className={styles.introduction} >
        <h2>Selamat Datang di <span id="ces-intro">CES</span></h2>
        <p className={styles.introdetail}>
            Merupakan website pusat untuk seluruh Samsat di Indonesia, yang memfasilitasi pembayaran pajak kendaraan bermotor dengan mudah!
        </p>
        <button className={styles.introbutton}>
            <p>Mulai</p>
        </button>
    </section>
    
    <section className={styles.details}>
        <div className={styles.detail}>
            <h3 className={styles.detailtitle}>Lebih Mudah</h3>
            <p className={styles.detailsubtitle}>Pembayaran pajak menjadi lebih mudah melalui gadget anda, tanpa perlu datang terlebih dulu ke kantor samsat</p>
        </div>
        <div className={styles.detail}>
            <h3 className={styles.detailtitle}>Lebih Cepat</h3>
            <p className={styles.detailsubtitle}>Pembayaran pajak menjadi lebih cepat tanpa perlu membuang - buang waktu anda untuk antre di kantor samsat</p>
        </div>
    </section>

    <section className={styles.faq}>
        <div className={styles.faqLeft}>
            <img src="assets/faq-img.jpg" alt=""></img>
        </div>
        <div className={styles.faqRight}>
            <h3 className={styles.faqtitle}>Punya Pertanyaan?</h3>
            <p className={styles.faqsubtitle}>Tanya disini dan kami akan menjawab semua pertanyaan anda!</p>
            <button className={styles.faqbutton}>
                <p>Tanya</p>
            </button>
        </div>
    </section>

    <section className={styles.pay}>
        <h3 className={styles.paytitle}>Bayar Pajak</h3>
        <p className={styles.paysubtitle}>Mulai bayar pajak anda secara mudah dan cepat sekarang juga!</p>
        <button className={styles.paybutton}>
            <p>Bayar</p>
        </button>
    </section>
  </>
}