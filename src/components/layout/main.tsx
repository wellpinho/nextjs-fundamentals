import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}
