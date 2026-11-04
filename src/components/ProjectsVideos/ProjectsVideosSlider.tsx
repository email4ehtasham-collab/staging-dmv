"use client";

import { useState, useEffect, ReactNode } from "react";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function NextArrow(props: any) {
  const { onClick } = props;

  return (
    <div onClick={onClick} className="slick-arrow slick-next">
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.5 9C0.5 8.37868 1.00368 7.875 1.625 7.875L17.5819 7.875L11.3453 1.93593C10.8974 1.50529 10.8834 0.793119 11.3141 0.345249C11.7447 -0.102618 12.4569 -0.116583 12.9047 0.31406L21.1547 8.18906C21.3753 8.40116 21.5 8.69398 21.5 9C21.5 9.30602 21.3753 9.59883 21.1547 9.81093L12.9047 17.6859C12.4569 18.1166 11.7447 18.1026 11.3141 17.6547C10.8974 17.2069 10.8974 16.4947 11.3453 16.0641L17.5819 10.125L1.625 10.125C1.00368 10.125 0.5 9.62132 0.5 9Z" fill="currentcolor"/>
        </svg>
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;

  return (
    <div onClick={onClick} className="slick-arrow slick-prev">
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.5 9C21.5 9.62132 20.9963 10.125 20.375 10.125L4.41812 10.125L10.6547 16.0641C11.1026 16.4947 11.1166 17.2069 10.6859 17.6548C10.2553 18.1026 9.54312 18.1166 9.09525 17.6859L0.845253 9.81094C0.624665 9.59883 0.5 9.30602 0.5 9C0.5 8.69398 0.624665 8.40117 0.845253 8.18906L9.09525 0.314064C9.54312 -0.116579 10.2553 -0.102615 10.6859 0.345254C11.1166 0.793122 11.1026 1.5053 10.6547 1.93594L4.41812 7.875L20.375 7.875C20.9963 7.875 21.5 8.37868 21.5 9Z" fill="currentcolor"/>
        </svg>
    </div>
  );
}

interface ServiceSliderProps {
    children: ReactNode;
}

const ServiceSlider = ({ children }: ServiceSliderProps) => {
  const [mounted, setMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;
      if (w <= 576) setSlidesToShow(1);
      else if (w <= 768) setSlidesToShow(2);
      else if (w <= 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (!mounted) {
    return (
      <div className="slick-slider slick-initialized">
        <div className="slick-list">
          <div className="slick-track row" style={{ opacity: 1, display: 'flex', flexWrap: 'nowrap' }}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default ServiceSlider;