import { ActiveLinek } from "../activeLink";
import styles from "./styles.module.scss";

export function Navegation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <ActiveLinek text="Home" href="/" />
        </li>
        <li>
          <ActiveLinek text="About" href="/about" />
        </li>
        <li>
          <ActiveLinek text="Contact" href="/contact" />
        </li>
      </ul>
    </nav>
  );
}
