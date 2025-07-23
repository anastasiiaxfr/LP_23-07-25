import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo.svg";

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="" />
    </Link>
  );
}

export default Logo;
