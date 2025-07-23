import Image from "next/image";
import Link from "next/link";
import img from "@/assets/img/img2.jpg";
import app1 from "@/assets/img/app1.png";
import app2 from "@/assets/img/app2.png";

function Apps() {
  return (
    <section className="section section_apps">
      <div className="container">
        <div className="apps">
          <Image src={img} alt="" className="apps_bg" />
          <div className="apps_content">
            <h2 className="mb-5">Ready for the future? Download The App!</h2>
            <p className="subtitle">
              Download the banking app to easily manage your finances, check
              account balances, transfer money, pay bills, and access a range of
              banking services from your mobile device.
            </p>

            <div className="btns">
              <Link href="/">
                <Image src={app1} alt="" />
              </Link>
              <Link href="/">
                <Image src={app2} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apps;
