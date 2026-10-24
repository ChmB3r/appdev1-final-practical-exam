import styles from "./Login.module.css";
import blossom from "./assets/blossom-flower.svg";
import googleLogo from "./assets/icons-google-logo.svg";
import appleLogo from "./assets/icons-apple-logo.svg";

export default function Login() {
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

                    <div className={styles.divider}>
                        <span>Or</span>
                        </div>

                        <div className={styles.socials}>
                        <button type="button" className={styles.socialButton}>
                            <img src={googleLogo} alt="" />
                            <span>Sign in with Google</span>
                        </button>
                        <button type="button" className={styles.socialButton}>
                            <img src={appleLogo} alt="" />
                            <span>Sign in with Apple</span>
                        </button>
                        </div>
                        
                        <p className={styles.bottomText}>
                            Have an account? <a href="#" className={styles.signInLink}>Sign In</a>
                        </p>
                </form>
            </div>
        </section>

        <section className={styles.right}>
            <img src={blossom} alt="Blossom flower" className={styles.blossom} />
        </section>
    </div>
  );
}