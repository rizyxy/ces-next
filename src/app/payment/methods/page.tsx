import Link from "next/link";
import styles from "./paymentmethod.module.css";

export default function Page() {
  return (
    <>
    <div className={styles.containers}>
      
        <h2 className={styles.title}>Metode Pembayaran</h2>
        <section className={styles.paymentMethods}>
          <Link href="/payment/invoice">
            <div className={styles.paymentMethod}>
              <img
                className={styles.paymentImg}
                src="/assets/payment/image 9.png"
                alt=""
              ></img>
            </div>
          </Link>
          <Link href="/payment/invoice">
            <div className={styles.paymentMethod}>
              <img
                className={styles.paymentImg}
                src="/assets/payment/image 8.png"
                alt=""
              ></img>
            </div>
          </Link>
          <Link href="/payment/invoice">
            <div className={styles.paymentMethod}>
              <img
                className={styles.paymentImg}
                src="/assets/payment/image 21.png"
                alt=""
              ></img>
            </div>
          </Link>
          <Link href="/payment/invoice">
            <div className={styles.paymentMethod}>
              <img
                className={styles.paymentImg}
                src="/assets/payment/image 20.png"
                alt=""
              ></img>
            </div>
          </Link>
          <Link href="/payment/invoice">
            <div className={styles.paymentMethod}>
              <img
                className={styles.paymentImg}
                src="/assets/payment/image 19.png"
                alt=""
              ></img>
            </div>
          </Link>
          <Link href="/payment/invoice">
            <div className={styles.paymentMethod}>
              <img
                className={styles.paymentImg}
                src="/assets/payment/image 17.png"
                alt=""
              ></img>
            </div>
          </Link>
          <Link href="/payment/invoice">
            <div className={styles.paymentMethod}>
              <img
                className={styles.paymentImg}
                src="/assets/payment/image 15.png"
                alt=""
              ></img>
            </div>
          </Link>
          <Link href="/payment/invoice">
            <div className={styles.paymentMethod}>
              <img
                className={styles.paymentImg}
                src="/assets/payment/image 13.png"
                alt=""
              ></img>
            </div>
          </Link>
        </section>
    </div>
    </>
  );
}
