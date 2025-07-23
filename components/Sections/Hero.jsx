import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from "@/assets/img/img1.png";

function Hero() {
  return (
    <section className="section hero">
      <div className="container">
        <div className="row">
          <div>
            <h1>Discover Financial Freedom with LegacyLine</h1>
            <p className="subtitle">
              Welcome to our bank's website, where we provide secure financial
              solutions tailored to meet your unique needs.
            </p>

            <div className="btns">
              <Button asChild className="btn">
                <Link href="/">Open Bank Account</Link>
              </Button>
              <Button asChild className="btn-bd">
                <Link href="/">Learn More</Link>
              </Button>
            </div>

            <div className="stat">
              <div className="stat_item">
                <div className="stat_val">{"<0.1%"}</div>
                <div className="stat_desc">Transaction Fees</div>
              </div>
              <div className="stat_item">
                <div className="stat_val">+14%</div>
                <div className="stat_desc">Savings Percentage</div>
              </div>
              <div className="stat_item">
                <div className="stat_val">+2.9M</div>
                <div className="stat_desc">Buisness Owner</div>
              </div>
            </div>
          </div>
          <div>
            <Image src={img} alt="" className="m-auto"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
