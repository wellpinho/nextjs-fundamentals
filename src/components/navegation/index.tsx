import { ActiveLink } from "../activeLink";
import styles from "./styles.module.scss";

export function Navegation() {
  const menuItens = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Products",
      href: "/products",
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {menuItens.map(({ text, href }) => {
          return (
            <li className={styles.li} key={text}>
              <ActiveLink text={text} href={href} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
