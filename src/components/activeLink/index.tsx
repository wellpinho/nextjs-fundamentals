import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
interface ILinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: "#eba417",
  textDecoration: "underline",
  fontWeight: "bold",
};

export function ActiveLink({ text, href }: ILinkProps) {
  const { asPath } = useRouter();
  const active = asPath === href ? style : undefined;

  return (
    <Link href={href}>
      <a style={active}>{text}</a>
    </Link>
  );
}
