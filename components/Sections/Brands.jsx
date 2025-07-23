import Image from "next/image";
import b1 from "@/assets/img/brands/b1.png";
import b2 from "@/assets/img/brands/b2.png";
import b3 from "@/assets/img/brands/b3.png";
import b4 from "@/assets/img/brands/b4.png";
import b5 from "@/assets/img/brands/b5.png";

const brands = [b2, b1, b5, b4, b3];

function Brands() {
  return (
    <section className="section section_brands">
      <div className="container">
        <div className="brands">
          {brands.map((i, ind) => (
            <Image src={i} key={ind} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
