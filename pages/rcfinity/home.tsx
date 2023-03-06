import React from "react";
import * as MaterialDesign from "react-icons/md";
import Layout from "../../src/layout/Layout";
import { FaTv } from "react-icons/fa";
import { BsBatteryCharging } from "react-icons/bs";
import { MdOutlineCameraRoll } from "react-icons/md";
import { TbCameraMinus } from "react-icons/tb";
import { MdOutlineElectricMeter } from "react-icons/md";
import { RiRadio2Line } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
export default function home() {
  return (
    <Layout
      header={3}
      className="home-three"
      footer={3}
      noHeader={undefined}
      SideBar={undefined}
    >
      <section className="flex flex-col justify-center">
        <div className="collectionContainer flex flex-row justify-around items-center mt-7 px-10 py-3">
          <div className="leftContainer bg-[#C4C4C4] items-center py-24 px-14 rounded-2xl">
            <div className="innerContainer bg-[#FAFAFA] justify-center items-center py-8 rounded-2xl">
              <div className="textOne text-center font-bold font-[Montserrat] text-3xl text-black">
                RC Collection
              </div>
              <div className="para mx-4 text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.{" "}
              </div>
            </div>
          </div>

          <div className="rightContainer bg-[#C4C4C4]  items-center py-24 px-14 rounded-2xl">
            <div className="innerContainer bg-[#FAFAFA] justify-center items-center py-8 rounded-2xl">
              <div className="textOne text-center font-bold font-[Montserrat] text-3xl text-black">
                Electronics Collection
              </div>
              <div className="para mx-4 text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="category mt-10 flex flex-col px-10 py-3">
          <div className="heading-category font-bold font-[Montserrat] text-3xl text-black">
            Category
          </div>
          <div className="products-category flex  mt-10 justify-around items-center">
            <div className="products  flex flex-col justify-center items-center">
              <a href="">
                {/* <i className="fas fa-laptop"></i> */}
                <FaTv size={30} />
              </a>
              <div className="mt-1">Our Products</div>
            </div>

            <div className="products flex flex-col justify-center items-center">
              <a href="">
                <MdOutlineCameraRoll
                  size={30}
                  style={{ transform: "rotate(90deg)" }}
                />
              </a>
              <div className="mt-1">Motors</div>
            </div>

            <div className="products flex flex-col justify-center items-center">
              <a href="">
                <TbCameraMinus size={30} />
              </a>
              <div className="mt-1"> Transmitters</div>
            </div>

            <div className="products flex flex-col justify-center items-center">
              <a href="">
                <MdOutlineElectricMeter size={30} style={{ fill: "black" }} />
              </a>
              <div className="mt-1"> Electronics</div>
            </div>

            <div className="products flex flex-col justify-center items-center">
              <a href="">
                <BsBatteryCharging size={30} />
              </a>
              <div className="mt-1"> Batteries</div>
            </div>

            <div className="products flex flex-col justify-center items-center">
              <a href="">
                <RiRadio2Line
                  size={30}
                  style={{ transform: "rotate(90deg)" }}
                />
              </a>
              <div className="mt-1">Accessories</div>
            </div>

            <div className="products flex flex-col justify-center items-center">
              <a href="">
                <IoGameControllerOutline size={30} />
              </a>
              <div className="mt-1"> Propellers</div>
            </div>
          </div>
        </div>

        <div className="new-arrival mt-24 flex flex-col px-20 py-3">
          <div className="heading-arrival flex flex-row justify-between items-center">
            <div className="newArrival-heading font-bold font-[Montserrat] text-3xl text-black">
              New Arrival
            </div>
            <div className="view-all-tag text-orange-500 font-normal">
              View All
            </div>
          </div>

          <div className="card-holder justify-center items-center flex flex-row mt-4">
            <div className="cards border-2 border-gray-200 rounded-2xl">
              <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-80 h-80 aspect-square rounded-t-2xl"
                />
                <div className="discount">
                  <div className="newIcon absolute top-6 right-6 font-[Poppins] font-medium text-sm text-white bg-[#F46B5B] p-2 rounded-full">
                    NEW
                  </div>
                </div>
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  SKYPER (DIY Model Plane Kit)
                </div>
                <div className="prouct-price font-bold text-base font-[Poppins] text-black text-center mt-2">
                  ₹ 1999.00
                </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
            <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-80 h-80 aspect-square rounded-t-2xl"
                />
                <div className="discount">
                  <div className="newIcon absolute top-6 right-6 font-[Poppins] font-medium text-sm text-white bg-[#F46B5B] p-2 rounded-full">
                    NEW
                  </div>
                </div>
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  SKYPER (DIY Model Plane Kit)
                </div>
                <div className="prouct-price font-bold text-base font-[Poppins] text-black text-center mt-2">
                  ₹ 1999.00
                </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
             <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-80 h-80 aspect-square rounded-t-2xl"
                />
                <div className="discount">
                  <div className="newIcon absolute top-6 right-6 font-[Poppins] font-medium text-sm text-white bg-[#F46B5B] p-2 rounded-full">
                    NEW
                  </div>
                </div>
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  SKYPER (DIY Model Plane Kit)
                </div>
                <div className="prouct-price font-bold text-base font-[Poppins] text-black text-center mt-2">
                  ₹ 1999.00
                </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
            <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-80 h-80 aspect-square rounded-t-2xl"
                />
                <div className="discount">
                  <div className="newIcon absolute top-6 right-6 font-[Poppins] font-medium text-sm text-white bg-[#F46B5B] p-2 rounded-full">
                    NEW
                  </div>
                </div>
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  SKYPER (DIY Model Plane Kit)
                </div>
                <div className="prouct-price font-bold text-base font-[Poppins] text-black text-center mt-2">
                  ₹ 1999.00
                </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flash-sale bg-[#F46B5B] bg-opacity-10 mt-32 p-16">
          <div className="flash-sale-container">
            <div className="flash-sale-div ">
              <div className="text-4xl font-bold font-[Montserrat] text-black">
                Flash Sale
              </div>
              <div className="font-medium font-[Poppins] mt-7 text-lg text-black">
                Sale Ends In:
              </div>
              <div className="launch-time flex basis-4 mt-3">
                <div className="timer flex flex-row space-x-4">
                  <div className="flex flex-col justify-center items-center border-1 border-black rounded-xl">
                    {/* <p>{hours}</p> */}
                    <p className="font-bold text-orange-500 text-xl  text-center pt-2 px-3 ">
                      00
                    </p>
                    <span className="font-text-lg font-normal">Hrs</span>
                  </div>

                  <div className="flex flex-col justify-center items-center border-1 border-black rounded-xl">
                    {/* <p>{minutes}</p> */}
                    <p className="font-bold text-orange-500 text-xl  text-center pt-2 px-3">
                      00
                    </p>
                    <span className="font-text-lg font-normal">Min</span>
                  </div>

                  <div className="flex flex-col justify-center items-center border-1 border-black rounded-xl">
                    {/* <p>{seconds}</p> */}
                    <p className="font-bold text-orange-500 text-xl  text-center pt-2 px-3">
                      00
                    </p>
                    <span className="font-text-lg font-normal">Sec</span>
                  </div>
                </div>
              </div>

              <div className="discount-text mt-10 text-black font-[Poppins] text-3xl font-normal w-1/5">
                Everyday discount up to 30% Off !
              </div>
              <div className="mt-3 font-[Poppins] text-black text-lg font-normal w-1/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.{" "}
              </div>
              <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="featured-products mt-24 flex flex-col px-20 py-3">
          <div className="heading-featured flex flex-row justify-between items-center">
            <div className="featured-products-heading font-bold font-[Montserrat] text-3xl text-black">
              Featured Products
            </div>
            <div className="view-all-tag text-orange-500 font-normal">
              View All
            </div>
          </div>

          <div className="card-holder justify-center items-center flex flex-row mt-5">
            <div className="cards border-2 border-gray-200 rounded-2xl">
            <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-80 h-80  aspect-square rounded-t-2xl"
                />
                <div className="discount">
                  <div className="newIcon absolute top-6 right-6 font-[Poppins] font-medium text-sm text-white bg-[#2D9CDB] p-2 rounded-xl">
                    NEW
                  </div>
                  <div className="newIcon absolute top-20 right-6 font-[Poppins] font-medium text-sm text-white bg-[#BB6BD9] py-2 px-1 rounded-xl w-min">
                    -10% Off
                  </div>
                </div>
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                <div className="price-tag flex flex-row justify-center items-center space-x-2">
                  <div className="price-cut line-through text-gray-400  text-base font-normal font-[Poppins]">
                    $29.99
                  </div>
                  <div>-</div>
                  <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins]">
                    $19.99
                  </div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
              <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-80 h-80  aspect-square rounded-t-2xl"
                />
                <div className="discount">
                  <div className="newIcon absolute top-6 right-6 font-[Poppins] font-medium text-sm text-white bg-[#2D9CDB] p-2 rounded-xl">
                    NEW
                  </div>
                  <div className="newIcon absolute top-20 right-6 font-[Poppins] font-medium text-sm text-white bg-[#BB6BD9] py-2 px-1 rounded-xl w-min">
                    -10% Off
                  </div>
                </div>
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                <div className="price-tag flex flex-row justify-center items-center space-x-2">
                  <div className="price-cut line-through text-gray-400  text-base font-normal font-[Poppins]">
                    $29.99
                  </div>
                  <div>-</div>
                  <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins]">
                    $19.99
                  </div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
            <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-80 h-80  aspect-square rounded-t-2xl"
                />
                <div className="discount">
                  <div className="newIcon absolute top-6 right-6 font-[Poppins] font-medium text-sm text-white bg-[#2D9CDB] p-2 rounded-xl">
                    NEW
                  </div>
                  <div className="newIcon absolute top-20 right-6 font-[Poppins] font-medium text-sm text-white bg-[#BB6BD9] py-2 px-1 rounded-xl w-min">
                    -10% Off
                  </div>
                </div>
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                <div className="price-tag flex flex-row justify-center items-center space-x-2">
                  <div className="price-cut line-through text-gray-400  text-base font-normal font-[Poppins]">
                    $29.99
                  </div>
                  <div>-</div>
                  <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins]">
                    $19.99
                  </div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
            <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-80 h-80  aspect-square rounded-t-2xl"
                />
                <div className="discount">
                  <div className="newIcon absolute top-6 right-6 font-[Poppins] font-medium text-sm text-white bg-[#2D9CDB] p-2 rounded-xl">
                    NEW
                  </div>
                  <div className="newIcon absolute top-20 right-6 font-[Poppins] font-medium text-sm text-white bg-[#BB6BD9] py-2 px-1 rounded-xl w-min">
                    -10% Off
                  </div>
                </div>
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                <div className="price-tag flex flex-row justify-center items-center space-x-2">
                  <div className="price-cut line-through text-gray-400  text-base font-normal font-[Poppins]">
                    $29.99
                  </div>
                  <div>-</div>
                  <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins]">
                    $19.99
                  </div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="toprated-product mt-24 flex flex-col px-20 py-3">
          <div className="heading-toprated flex flex-row justify-between items-center">
            <div className="toprated-product-heading font-bold font-[Montserrat] text-3xl text-black">
            Top Rated Product
            </div>
            <div className="view-all-tag text-orange-500 font-normal">
              View All
            </div>
          </div>

          <div className="card-holder justify-center items-center flex flex-row mt-4">
            <div className="cards border-2 border-gray-200 rounded-2xl">
              <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-64 h-64 aspect-square p-5 "
                />
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                 <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins] text-center">
                    $1000.00
                  </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
            <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-64 h-64 aspect-square rounded-t-2xl p-5"
                />
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                 <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins] text-center">
                 $1000.00
                  </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
             <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-64 h-64 aspect-square rounded-t-2xl p-5"
                />
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                 <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins] text-center">
                 $1000.00
                  </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
            <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-64 h-64 aspect-square rounded-2xl p-5"
                />
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                 <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins] text-center text-center">
                 $1000.00
                  </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="cards border-2 border-gray-200 rounded-2xl ml-12">
            <div className="imageCard relative">
                <img
                  src="/assets/images/homepage/gray-square.jpg"
                  alt=""
                  className="w-64 h-64 aspect-square p-5"
                />
              </div>

              <div className="card-details px-4 py-2 mt-2">
                <div className="product-name font-normal text-base font-[Poppins] text-black text-center">
                  Title
                </div>
                 <div className="right-price text-[#F46B5B] text-base font-medium font-[Poppins] text-center">
                    $1000.00
                  </div>
                <div className="card-ratings flex flex-row justify-center space-x-3 mt-2 leading-4 items-center">
                  <div>
                    <AiFillStar style={{ fill: "yellow" }} />
                  </div>
                  <div className="">5.0</div>
                  <div>
                    <AiOutlineMinus
                      size={30}
                      style={{ transform: "rotate(90deg)", fill: "#E6E6E3" }}
                    />
                  </div>
                  <div className="sold">Sold 99</div>
                </div>
                <div className="flex justify-center items-center pb-3">
                  <button className="mt-4 bg-[#F46B5B] text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="name-tags mt-24 px-20">
          <div className="names flex felx-row justify-around items-center ">
            <div className="font-normal text-4xl font-[Playfair Display]">SimSong</div>
            <div className="font-medium text-4xl font-[Poppins]">Harps</div>
            <div className="font-normal text-4xl font-[Vidaloka]">DiskVan</div>
            <div className="font-bold text-4xl font-[Montserrat]">Ikon</div>
            <div className="font-bold text-4xl font-[Nunito]">Strons</div>
            <div className="font-bold text-4xl font-[Inter]">Cocoon</div>
          </div>
        </div>

      </section>
    </Layout>
  );
}
