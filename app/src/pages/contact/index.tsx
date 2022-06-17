import Link from "next/link";
import styles from "../../styles/about.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/contact.tsx</code>
      </p>
    </div>
  );
}
