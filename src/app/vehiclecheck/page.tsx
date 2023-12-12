"use client";
import Link from "next/link";
import styles from "./vehiclecheck.module.css";
import Footer from "../components/footer/footer";

export default function Page() {
  return (
    <>
      <div className={styles.containers}>
        <div className={styles.kontenBox}>
          <h1 className={styles.title}>Masukkan Informasi Kendaraan</h1>
          <div className={styles.konten}>
            <form className={`${styles["form"]}`} action="">
              <div className={`${styles["form-box"]}`}>
                <div className={`mb-5`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]} mb-3`}
                  >
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
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]} mb-3`}
                  >
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
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]} mb-3`}
                  >
                    Nomor Polisi
                  </label>
                  <input
                    type="text"
                    className={`form-control`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
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
