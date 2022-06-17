import { MainLayout } from "../../components/layout/main";
import { Navegation } from "../../components/navegation";

export default function About() {
  return (
    <>
      <Navegation />
      <MainLayout>
        <h1>About page</h1>
        <h2 className="title">
          Ir a <a href="/">Home</a>
        </h2>
        <p className="description">
          Get started by <code className="code">pages/about/index.js</code>
        </p>
      </MainLayout>
    </>
  );
}
