import Link from "next/link";
import { useRouter } from "next/router";
interface ILinkProps {
  text: string;
  href: string;
}

const style = {
  color: "#eba417",
  textDecoration: "underline",
  fontWeight: "bold",
};

export function ActiveLinek({ text, href }: ILinkProps) {
  const { asPath } = useRouter();
  const active = asPath === href ? style : null;

  return (
    <Link href={href}>
      <a style={active}>{text}</a>
    </Link>
  );
}
