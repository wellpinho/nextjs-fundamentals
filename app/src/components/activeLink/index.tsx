import Link from "next/link";

interface ILinkProps {
  text: string;
  href: string;
}

export function ActiveLinek({ text, href }: ILinkProps) {
  return <Link href={href}>{text}</Link>;
}
