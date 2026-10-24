import styles from "./SignUp.module.css";
import blossom from "./assets/blossom-flower.svg";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        {/* left section intentionally empty for now */}
      </section>

      <section className={styles.right}>
        <img src={blossom} alt="Blossom flower" className={styles.blossom} />
      </section>
    </div>
  );
}