import React from "react";
import { NextArrow, PrevArrow } from "./Arrows.component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/images/faceImage.png"
import { MdOutlineQrCode2 } from "react-icons/md"
import { CgHashtag } from "react-icons/cg"

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
  // {
  //   image: image1,
  //   heading: "How Gen Z is hooked on the cryptocurrency & NFTs",
  //   text: "The lure of making a quick buck has always attracted young people to invest in risky assets. For Generation Z, it is the volatility - and the decentralised nature",
  // },
  // {
  //   image: image1,
  //   heading: "Linktree is rolling out new features to allow creators showcase their NFTs",
  //   text: "Link-in-bio platform Linktree is the latest company that is looking to integrate NFTs into its service",
  // },
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
              <div key={i} className='px-0 sm:px-10'>
                <div className="border border-white rounded-lg">
                  <img
                    src={data.image}
                    alt="image"
                    className="w-full h-96 rounded"
                  />
                  <div className="flex justify-between ml-2 mb-1 flex-wrap">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-white text-lg">Ralph Edwards</h1>
                      <p className="text-gray-300 text-xxs">Mother Nature</p>
                      <p className="text-gray-300 text-xxs">Mother Nature, she does what she wants.</p>
                      <div>
                        <p className="text-gray-500 text-xxs">07.13.2022 Machine</p>
                        <p className="text-gray-500 text-xxs">elmt.no.202207130309</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w- text-white">
                      <CgHashtag size={'4rem'} className="m-0 p-0" />
                      <p className="text-bold text-6xl">2</p>
                      <MdOutlineQrCode2 size={'4rem'} />
                    </div>
                  </div>
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
              <div key={i} className='px-10'>
                <div className="border border-white rounded-lg">
                  <img
                    src={data.image}
                    alt="image"
                    className="w-full h-96 rounded"
                  />
                  <div className="flex justify-between ml-2 mb-1 flex-wrap">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-white text-lg">Ralph Edwards</h1>
                      <p className="text-gray-300 text-xxs">Mother Nature</p>
                      <p className="text-gray-300 text-xxs">Mother Nature, she does what she wants.</p>
                      <div>
                        <p className="text-gray-500 text-xxs">07.13.2022 Machine</p>
                        <p className="text-gray-500 text-xxs">elmt.no.202207130309</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w- text-white">
                      <CgHashtag size={'4rem'} className="m-0 p-0" />
                      <p className="text-bold text-6xl">2</p>
                      <MdOutlineQrCode2 size={'4rem'} />
                    </div>
                  </div>
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
              <div key={i} className='px-10'>
                <div className="border border-white rounded-lg">
                  <img
                    src={data.image}
                    alt="image"
                    className="w-full h-96 rounded"
                  />
                  <div className="flex justify-between ml-2 mb-1 flex-wrap">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-white text-lg">Ralph Edwards</h1>
                      <p className="text-gray-300 text-xxs">Mother Nature</p>
                      <p className="text-gray-300 text-xxs">Mother Nature, she does what she wants.</p>
                      <div>
                        <p className="text-gray-500 text-xxs">07.13.2022 Machine</p>
                        <p className="text-gray-500 text-xxs">elmt.no.202207130309</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w- text-white">
                      <CgHashtag size={'4rem'} className="m-0 p-0" />
                      <p className="text-bold text-6xl">2</p>
                      <MdOutlineQrCode2 size={'4rem'} />
                    </div>
                  </div>
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
        <p className="mx-10 my-3 text-gray-500"><span className="text-white text-2xl">NFT's </span>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <hr className='class="border border-gray-700 my-4 mx-10' />
        <div className="md:hidden"><Mobile /></div>
        <div className="hidden md:block lg:hidden"><Tablet /></div>
        <div className="hidden lg:block"><Laptop /></div>
      </div>
    </>
  );
};

export default NFTCarousel;

