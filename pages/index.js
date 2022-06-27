import { Demo } from "../components/Demo";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { Nav } from "../components/Nav";
import { Reviews } from "../components/Reviews";
import { Head } from "../components/Head";

const IndexPage = () => {
  return (
    <>
      <Head />
      <Layout>
        <Nav />
        <Hero />
        <Features />
        <Demo />
        <Reviews />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
