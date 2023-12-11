"use client";
import Link from "next/link";
import styles from "./vehiclecheck.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.kontenBox}>
          <h1 className={styles.title}>Vehicle Check</h1>
          <div className={styles.konten}>
            <form className={`${styles["form"]}`} action="">
              <div className="">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  NIK
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
