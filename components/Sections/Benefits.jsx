import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const data = [
  {
    icon: "ben1",
    title: "Financial Services",
    desc: "Banks provide a wide range of financial services, including checking and savings accounts, loans, credit cards, and investment production...",
  },
  {
    icon: "ben2",
    title: "Safety and Security",
    desc: "Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance Corporation (FDIC.....",
  },
  {
    icon: "ben3",
    title: "Economic Stability",
    desc: "Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance Corporation (FDIC.....",
  },
];

function Benefits() {
  return (
    <>
      <section className="section section_benefits">
        <div className="container">
          <h2>Our Key Benefits</h2>

          <div className="cards">
            {data.map((i, ind) => (
              <article className="card group" key={ind}>
                <div className="card_icon">
                  <svg className="icon" height="50" width="50">
                    <use xlinkHref={`#${i.icon}`}></use>
                  </svg>
                </div>
                <h4 className="card_title">{i.title}</h4>
                <p className="card_desc">{i.desc}</p>
                <Link href="/" className="card_link">
                  Read more <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <svg width="0" height="0" className="hidden">
        <symbol
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          id="ben1"
        >
          <path
            d="M73.0855 31.4384H7.28526C4.16782 31.4384 2.83177 28.0002 5.28119 26.3656L38.1813 4.55257C38.7888 4.19078 39.4807 4 40.1854 4C40.8901 4 41.582 4.19078 42.1895 4.55257L75.0896 26.3656C77.539 28.0002 76.203 31.4384 73.0855 31.4384Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M73.5858 62.4389H6.78343C5.24618 62.4389 4 63.7007 4 65.2571V73.7118C4 75.2683 5.24618 76.53 6.78343 76.53H73.5858C75.123 76.53 76.3692 75.2683 76.3692 73.7118V65.2571C76.3692 63.7007 75.123 62.4389 73.5858 62.4389Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.3503 31.4384V62.4389M26.2674 31.4384V62.4389M40.1846 31.4384V62.4389M54.1017 31.4384V62.4389M68.0189 31.4384V62.4389"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </symbol>
        <symbol
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          id="ben2"
        >
          <path
            d="M14.7683 17.7207V44.1114C14.7683 58.4783 26.156 70.1223 40.2015 70.1223C54.247 70.1223 65.6347 58.4783 65.6347 44.1114V17.735L40.0487 9.1333L14.7683 17.7207ZM40.0416 4L70.403 14.2027V44.1114C70.403 61.1692 56.8798 75 40.2015 75C23.5232 75 10 61.1692 10 44.1114V14.2027L40.0416 4ZM55.7428 27.0217C55.5109 26.8089 55.2384 26.6449 54.9417 26.5395C54.645 26.4341 54.33 26.3896 54.0157 26.4085C53.7013 26.4273 53.394 26.5093 53.112 26.6494C52.83 26.7896 52.5792 26.985 52.3745 27.2241L37.0392 44.864L27.1331 33.9123C26.9237 33.6779 26.6692 33.4879 26.3848 33.3538C26.1004 33.2196 25.7918 33.144 25.4776 33.1314C25.1633 33.1188 24.8497 33.1695 24.5555 33.2805C24.2612 33.3915 23.9923 33.5605 23.7648 33.7774C23.2989 34.2223 23.0247 34.8309 23.0001 35.4743C22.9756 36.1177 23.2027 36.7454 23.6333 37.2244L35.3231 50.1464C35.5457 50.3965 35.8194 50.5961 36.1257 50.7316C36.432 50.8671 36.7638 50.9355 37.0988 50.9321C37.4338 50.9288 37.7642 50.8537 38.0677 50.7121C38.3712 50.5704 38.6408 50.3655 38.8584 50.111L55.9382 30.4652C56.3598 29.9784 56.5751 29.3467 56.5386 28.704C56.5021 28.0612 56.2167 27.4579 55.7428 27.0217Z"
            fill="currentColor"
          ></path>
        </symbol>
        <symbol
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          id="ben3"
        >
          <path
            d="M5 5V67.2222C5 69.285 5.81944 71.2633 7.27806 72.7219C8.73667 74.1806 10.715 75 12.7778 75H75"
            stroke="currentColor"
            strokeWidth="4"
            strokeMiterlimit="5.759"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M20.5555 47.7778L36.111 32.2222L51.6666 47.7778L74.9999 24.4445"
            stroke="currentColor"
            strokeWidth="4"
            strokeMiterlimit="5.759"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M63.3333 24.4445H75V36.1111"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </symbol>
      </svg>
    </>
  );
}

export default Benefits;
