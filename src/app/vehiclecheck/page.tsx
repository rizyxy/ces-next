"use client";
import Link from "next/link";
import styles from "./vehiclecheck.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kontenBox}>
          <h1 className={styles.title}>Masukkan Informasi Kendaraan</h1>
          <div className={styles.konten}>
            <form className={`${styles["form"]}`} action="">
              <div className={`mb-5`}>
                <label htmlFor="exampleInputEmail1" className={`form-label`}>
                  Provinsi
                </label>
                <input
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className={`mb-5`}>
                <label htmlFor="exampleInputEmail1" className={`form-label`}>
                  Kota
                </label>
                <input
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className={`mb-5`}>
                <label htmlFor="exampleInputEmail1" className={`form-label`}>
                  Nomor Polisi
                </label>
                <input
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <center>
                <Link href="/payment/bills">
                  <button type="submit" className={styles.payButton}>
                    Cek
                  </button>
                </Link>
              </center>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
