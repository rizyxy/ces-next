import Link from "next/link";
import styles from "./invoicesuc.module.css";
import { Printer } from "react-feather";
// styles.invoiceItem;
export default function Page() {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div className={`${styles["konten-box"]}`}>
          <h1 className={`${styles["title"]}`}>Invoice Pembayaran</h1>
          <div className={`${styles["konten"]}`}>
            <form className={`${styles["form"]}`} action="">
              <div className={`${styles["form-box"]}`}>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    No. Invoice
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="1125xxxxxxx"
                  />
                </div>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    Status
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]} text-success fw-bold`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="Sudah Bayar"
                  />
                </div>
                <center className="my-4">
                  <div className={`${styles["line"]}`}></div>
                </center>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    Nama Pemilik
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="Woody Andy"
                  />
                </div>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    NIK Pemilik
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="082111633057"
                  />
                </div>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    Model Kendaraan
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="Fortuner"
                  />
                </div>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    Merk Kendaraan
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="Toyota"
                  />
                </div>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    Tahun
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="2020"
                  />
                </div>
                <center className="my-4">
                  <div className={`${styles["line"]}`}></div>
                </center>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    Pajak
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="Rp6.500.000,00"
                  />
                </div>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    Biaya Admin
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="Rp100.000,00"
                  />
                </div>
                <div className={`${styles["form-group"]} mb-3`}>
                  <label
                    htmlFor="exampleInputEmail1"
                    className={`${styles["form-labels-text"]}`}
                  >
                    Total
                  </label>
                  <input
                    disabled
                    type="text"
                    className={`${styles["form-control"]} fw-bold text-black`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value="Rp6.600.000,00"
                  />
                </div>
              </div>

              <div className={`${styles["button-group"]}`}>
                <Link href="/vehiclecheck">
                  <button className={styles.canButton}>
                    <Printer></Printer>
                  </button>
                </Link>
                <Link href="/payment/methods">
                  <button className={styles.payButton}>Bayar</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
