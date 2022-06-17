import styles from "./styles.module.scss";

export function MainLayout({ children }: any) {
  return <main className={styles.main}>{children}</main>;
}
