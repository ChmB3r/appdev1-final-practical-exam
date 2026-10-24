import styles from "./SignUp.module.css";
import blossom from "./assets/blossom-flower.svg";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Get Started Now</h1>
                    <form className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input id="name" type="text" placeholder="Enter your name" className={styles.input} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email address</label>
                    <input id="email" type="email" placeholder="Enter your email" className={styles.input} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input id="password" type="password" placeholder="Name" className={styles.input} />
                </div>

                <label className={styles.checkbox}>
                    <input type="checkbox" />
                    <span>I agree to the <a href="#" className={styles.terms}>terms &amp; policy</a></span>
                </label>

                <button type="submit" className={styles.button}>Signup</button>
                </form>
            </div>
        </section>

        <section className={styles.right}>
            <img src={blossom} alt="Blossom flower" className={styles.blossom} />
        </section>
    </div>
  );
}