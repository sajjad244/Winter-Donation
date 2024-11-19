import React from "react";

const Banner = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel w-full rounded-lg shadow-sm">
        {/* First Slide */}
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/xgxgzFk/Sweater-03.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Donate Winter Clothes Today
                </h1>
                <p className="mb-5">
                  Help those in need by donating winter clothes. Your generous
                  donation can provide warmth and comfort to families in need
                  this winter season.
                </p>
              </div>
            </div>
          </div>
          {/* Carousel Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Second Slide */}
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/RDJQbWC/RS211506-DSC05093-scaled.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Join Our Winter Clothing Drive
                </h1>
                <p className="mb-5">
                  Your donation makes a real impact! Join our community
                  initiative to gather warm clothes for those in need this
                  winter.
                </p>
              </div>
            </div>
          </div>
          {/* Carousel Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Third Slide */}
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/NWRJyS0/ph-61993-242129.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Spread Warmth, Share a Coat
                </h1>
                <p className="mb-5">
                  This winter, share the warmth. Donate your gently used coats
                  and jackets to those who need it most.
                </p>
              </div>
            </div>
          </div>
          {/* Carousel Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
