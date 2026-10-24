import styles from "./Login.module.css";
import blossom from "./assets/blossom-flower.svg";
import googleLogo from "./assets/icons-google-logo.svg";
import appleLogo from "./assets/icons-apple-logo.svg";

export default function Login() {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Welcome back!</h1>
                <p className={styles.subtitle}>Enter your Credentials to access your account</p>
                <form className={styles.form}>

                    <div className={styles.field}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        <input id="email" type="email" placeholder="Enter your email" className={styles.input} />
                    </div>

                    <div className={styles.field}>
                        <div className={styles.labelRow}>
                            <label htmlFor="password" className={styles.label}>Password</label>
                            <a href="#" className={styles.forgot}>forgot password</a>
                        </div>
                        <input id="password" type="password" placeholder="Enter your password" className={styles.input} />
                    </div>

                    <label className={styles.checkbox}>
                        <input type="checkbox" />
                        <span>Remember for 30 days</span>
                        </label>
                    <button type="submit" className={styles.button}>Login</button>

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
                            Don&apos;t have an account? <a href="#" className={styles.signInLink}>Sign Up</a>
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