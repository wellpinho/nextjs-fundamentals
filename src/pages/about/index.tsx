import Link from "next/link";
import { MainLayout } from "../../components/layout/main";
import { Navegation } from "../../components/navegation";

export default function About() {
  return (
    <>
      <Navegation />
      <MainLayout>
        <h1>About page</h1>
        <h2 className="title">
          Ir a <Link href="/">Home</Link>
        </h2>
        <p className="description">
          Get started by <code className="code">pages/about/index.js</code>
        </p>
      </MainLayout>
    </>
  );
}
