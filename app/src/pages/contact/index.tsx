import { MainLayout } from "../../components/layout/main";
import { Navegation } from "../../components/navegation";

export default function Contact() {
  return (
    <>
      <Navegation />
      <MainLayout>
        <h1>Contact page</h1>
        <h2 className="title">
          Ir a <a href="/">Home</a>
        </h2>
        <p className="description">
          Get started by <code className="code">pages/contact/index.js</code>
        </p>
      </MainLayout>
    </>
  );
}
