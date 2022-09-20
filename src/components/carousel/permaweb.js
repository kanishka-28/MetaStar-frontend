import React from "react";
import { NextArrow, PrevArrow } from "./Arrows.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/images/image-1.png"


const images = [
  {
    image: image1,
    heading: "How Gen Z is hooked on the cryptocurrency & NFTs",
    text: "The lure of making a quick buck has always attracted young people to invest in risky assets. For Generation Z, it is the volatility - and the decentralised nature",
  },
  {
    image: image1,
    heading: "Linktree is rolling out new features to allow creators showcase their NFTs",
    text: "Link-in-bio platform Linktree is the latest company that is looking to integrate NFTs into its service",
  },
  {
    image: image1,
    heading: "How Gen Z is hooked on the cryptocurrency & NFTs",
    text: "The lure of making a quick buck has always attracted young people to invest in risky assets. For Generation Z, it is the volatility - and the decentralised nature",
  },
  {
    image: image1,
    heading: "Linktree is rolling out new features to allow creators showcase their NFTs",
    text: "Link-in-bio platform Linktree is the latest company that is looking to integrate NFTs into its service",
  },
  {
    image: image1,
    heading: "How Gen Z is hooked on the cryptocurrency & NFTs",
    text: "The lure of making a quick buck has always attracted young people to invest in risky assets. For Generation Z, it is the volatility - and the decentralised nature",
  },
  {
    image: image1,
    heading: "Linktree is rolling out new features to allow creators showcase their NFTs",
    text: "Link-in-bio platform Linktree is the latest company that is looking to integrate NFTs into its service",
  },
]

const Mobile = () => {

  const settingsmb = {
    // arrows: true,
    autoplay: true,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  }
  return (
    <>

      <div className="">
        <Slider {...settingsmb}>
          {
            images.map((data, i) => (
              <div key={i} className='sm:px-8 '>
                <div className='p-4 border border-white border-r-4 border-b-4 outline-0 h-96 h-min-96 flex  flex-col justify-between'>
                  <img
                    src={data.image}
                    alt="image"
                    className="w-80 h-36 rounded pb-2"
                  />
                  <p className="text-white text-lg text-semibold">{data?.heading?.slice(0,100)}</p>
                  <p className=" text-gray-500">{data?.text?.slice(0,100)+"..."}</p>
                <button className='text-gray-300 border border-b-4 border-gray-300 px-3 py-1 w-32'>READ MORE</button>
                </div>
              </div>
            ))
          }

        </Slider>
      </div>
    </>

  )
}

const Tablet = () => {

  const settingsMd = {
    arrows: true,
    autoplay: true,
    // centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  return (
    <>

      <div className="">
        <Slider {...settingsMd}>
          {
            images.map((data, i) => (
              <div key={i} className='px-2'>
                <div className='p-4 border border-white border-r-4 border-b-4 outline-0 flex  flex-col justify-between'>
                  <div className="h-">
                    <img
                      src={data.image}
                      alt="image"
                      className="w-80 h-36 rounded pb-2"
                    />
                    <p className="h-28 text-white text-lg text-semibold">{data?.heading?.slice(0,70)}</p>
                    <p className="text-white text-gray-500">{data?.text?.slice(0,80)+"..."}</p>
                  </div>
                  <button className='text-gray-300 border border-b-4 border-gray-300 px-3 py-1 w-32'>READ MORE</button>
                </div>
              </div>
            ))
          }

        </Slider>
      </div>
    </>

  )
}

const Laptop = () => {

  const settingsLg = {
    arrows: true,
    autoplay: true,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  return (
    <>
      <div className="">
        <Slider {...settingsLg}>
          {
            images.map((data, i) => (
              <div key={i} className='px-8'>
                <div className='p-4 h-96 border border-white border-r-4 border-b-4 outline-0 h-min-96 flex  flex-col justify-between'>
                  <div>
                    <img
                      src={data.image}
                      alt="image"
                      className="w-80 h-36 rounded pb-2"
                    />
                    <p className="text-white text-lg text-semibold">{data?.heading?.slice(0,100)}</p>
                    <p className="text-white text-gray-500">{data?.text?.slice(0,100)+"..."}</p>
                  </div>
                  <button className='text-gray-300 border border-b-4 border-gray-300 px-3 py-1 w-32'>READ MORE</button>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </>
     
  )
}

const NFTCarousel = () => {
  return (
    <>
      <div className="mx-8">
        <p className="sm:mx-8 my-12 text-white text-4xl">Explore the permaweb</p>
        <div className="sm:hidden bg-red-300"><Mobile /></div>
        <div className="hidden sm:block lg:hidden"><Tablet /></div>
        <div className="hidden lg:block"><Laptop /></div>
      </div>
    </>
  );
};

export default NFTCarousel;

