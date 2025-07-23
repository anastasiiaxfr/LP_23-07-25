"use client";
import { useRef, useEffect } from "react";

import Image from "next/image";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  Scrollbar,
  Pagination,
  Navigation,
  A11y,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import ava1 from "@/assets/img/comments/ava1.png";
import ava2 from "@/assets/img/comments/ava2.png";
import ava3 from "@/assets/img/comments/ava3.png";
import stars from "@/assets/img/icons/stars.svg";

const data = [
  {
    comment:
      "I've been using LegacyLine for several years now, and I couldn't be happier with their services. The mobile banking app they provide is an absolute game-changer. It's incredibly user-friendly and has made managing my finances a breeze.",
    author: "Jerry Helfer",
    date: "24 Oct, 2023",
    ava: ava1,
  },
  {
    comment:
      "I've been using LegacyLine for several years now, and I couldn't be happier with their services. The mobile banking app they provide is an absolute game-changer. It's incredibly user-friendly and has made managing my finances a breeze.",
    author: "Mary Freund",
    date: "24 Oct, 2023",
    ava: ava2,
  },
  {
    comment:
      "I've been using LegacyLine for several years now, and I couldn't be happier with their services. The mobile banking app they provide is an absolute game-changer. It's incredibly user-friendly and has made managing my finances a breeze.",
    author: "Stephanie Nicol",
    date: "24 Oct, 2023",
    ava: ava3,
  },
  {
    comment:
      "I've been using LegacyLine for several years now, and I couldn't be happier with their services. The mobile banking app they provide is an absolute game-changer. It's incredibly user-friendly and has made managing my finances a breeze.",
    author: "Stephanie Nicol",
    date: "24 Oct, 2023",
    ava: ava3,
  },
];

function Comments() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="section section_comments">
      <div className="container">
        <div className="flex flex-wrap gap-10 justify-center md:justify-between items-center mb-10">
          <h2 className="my-0">What Our Clients Say About Us</h2>

          <div className="btns">
            <button ref={prevRef} className="swiper_nav">
              <ArrowLeft />
            </button>
            <button ref={nextRef} className="swiper_nav">
              <ArrowRight />
            </button>
          </div>
        </div>

        <Swiper
          className="swiper-top-rating-casinos"
          modules={[
            Mousewheel,
            FreeMode,
            Autoplay,
            Scrollbar,
            Pagination,
            Navigation,
            A11y,
          ]}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          touchMoveStopPropagation={true}
          freeMode={{
            enabled: false,
            sticky: false,
            momentumRatio: 0.4,
          }}
          mousewheel={{
            forceToAxis: false,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          onSwiper={(swiper) => null}
          onSlideChange={() => null}
          //   autoplay={{
          //     delay: 5000,
          //     disableOnInteraction: false,
          //     pauseOnMouseEnter: true,
          //   }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            792: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((i, ind) => (
            <SwiperSlide key={i.documentId}>
              <article className="comment" key={ind}>
                <p className="comment_desc">{i.comment}</p>
                <hr className="comment_divider" />
                <div className="comment_info">
                  <Image src={i.ava} alt={i.author} />
                  <div>
                    <p className="mb-1">
                      <b>{i.author}</b>
                      <br />
                      <small>{i.date}</small>
                    </p>
                    <Image src={stars} alt="" />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Comments;
