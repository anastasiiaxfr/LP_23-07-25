import Link from "next/link";
import { Send, Facebook, Instagram, Twitter } from "lucide-react";
import Subscribe from "@/components/Subscribe";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <Subscribe />

          <nav className="footer_menu">
            <div>
              <p>
                <b>Menu</b>
              </p>
              <Link href="/">Home</Link>
              <Link href="/">Services</Link>
              <Link href="/">Open Bank Account</Link>
            </div>
            <div>
              <p>
                <b>Help</b>
              </p>
              <Link href="/">About us</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Support</Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <hr className="divider" />
      </div>
      <div className="footer_btm">
        <div className="container">
          <p>2023. All Rights Reserved</p>
          <Link href="#">Privacy & Policy</Link>
          <nav className="soc">
            <Link href="/">
              <Send />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Twitter />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
