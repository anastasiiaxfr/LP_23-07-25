import Header from "@/components/Layout/TheHeader";
import Hero from "@/components/Sections/Hero";
import Brands from "@/components/Sections/Brands";
import Footer from "./TheFooter";

function Layout({ children }) {
  return (
    <>
      <div className="page">
        <div className="hero_wrap">
          <Header />
          <Hero />
          <Brands />
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
