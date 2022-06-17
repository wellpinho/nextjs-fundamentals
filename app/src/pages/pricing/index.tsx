import { ActiveLinek } from "../../components/activeLink";
import styles from "./styles.module.scss";

export function Pricing() {
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
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <>
      {menuItens.map(({ text, href }) => {
        return (
          <li className={styles.li} key={text}>
            <ActiveLinek text={text} href={href} />
          </li>
        );
      })}
    </>
  );
}
