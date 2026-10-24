import styles from "./SignUp.module.css";
import blossom from "./assets/blossom-flower.svg";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Get Started Now</h1>
            </div>
      </section>

      <section className={styles.right}>
        <img src={blossom} alt="Blossom flower" className={styles.blossom} />
      </section>
    </div>
  );
}