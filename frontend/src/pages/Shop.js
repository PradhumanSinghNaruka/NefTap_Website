import React from "react";
import { href } from "react-router-dom";
import photo1 from "../image/metal.png";
import photo2 from "../image/pvc.png";
import photo3 from "../image/image6.png";
import photo4 from "../image/image5.png";
import photo5 from "../image/image5.png";
import photo6 from "../image/image6.png";
import photo7 from "../image/image6.png";

function Shop() {
  const carddata = [
    {
      id:1,
      image: photo1,
      name: "Black Professional - PVC NFC Business Visiting Card",
      price: 50,
      rating:5,
    },
    {
      id:2,
      image: photo2,
      name: "Abstract Black - PVC NFC Business Visiting Card",
      price: 60,
      rating:5,
    },
    {
      id:3,
      image: photo3,
      name: "Classy Black - Metal NFC Business Visiting Card",
      price: 60,
      rating:5,
    },
    {
      id:4,
      image: photo4,
      name: "Engraved Black - Engraved Metal NFC Business Visiting Card",
      price: 60,
      rating:4.5,
    },
    {
      id:5,
      image: photo5,
      name: "Clean Pink - PVC NFC Business Visiting Card",
      price: 60,
      rating:5,
    },
    {
      id:6,
      image: photo6,
      name: "Clean Pink - PVC NFC Business Visiting Card",
      price: 70,
      rating:4.2,
    },
    {
      id:7,
      image: photo7,
      name: "Clean Pink - PVC NFC Business Visiting Card",
      price: 70,
      rating:4.2,
    },
    {
      id:7,
      image: photo7,
      name: "Clean Pink - PVC NFC Business Visiting Card",
      price: 70,
      rating:4.2,
    },
    {
      id:7,
      image: photo7,
      name: "Clean Pink - PVC NFC Business Visiting Card",
      price: 70,
      rating:4.2,
    },
  ];

  const handleAddToCart = ()=>{
    alert('product added');
  }
  return (
    <>
      <div name="/shop" className="text-black mt-20 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row bg-blue-50">
          <div className="container mx-auto px-4 md:px-20 bg-blue-50">
            <h1 className="text-xl md:text-4xl font-semibold mt-4 md:mt-8">
              Smart NFC Business Visiting Card
            </h1>
            {/* <div className="hidden md:flex md:space-x-4 mt-8">
              <h1 className="border rounded-xl p-2 w-[100px] bg-gray-200 cursor-pointer hover:bg-black hover:text-white duration-100 justify-center text-center font-thin">
                All
              </h1>
              <h1 className="border rounded-xl p-2 w-[100px] bg-gray-200 cursor-pointer hover:bg-black hover:text-white duration-100 justify-center text-center font-thin">
                Metal
              </h1>
              <h1 className="border rounded-xl p-2 w-[100px] bg-gray-200 cursor-pointer hover:bg-black hover:text-white duration-100 justify-center text-center font-thin">
                PVC
              </h1>
              <h1 className="border rounded-xl p-2 w-[100px] bg-gray-200 cursor-pointer hover:bg-black hover:text-white duration-100 justify-center text-center font-thin">
                Engraved
              </h1>
              <h1 className="border rounded-xl p-2 w-[100px] bg-gray-200 cursor-pointer hover:bg-black hover:text-white duration-100 justify-center text-center font-thin">
                Professional
              </h1>
              <h1 className="border rounded-xl p-2 w-[100px] bg-gray-200 cursor-pointer hover:bg-black hover:text-white duration-100 justify-center text-center font-thin">
                ID Cards
              </h1>
              <h1 className="border rounded-xl p-2 w-[150px] bg-gray-200 cursor-pointer hover:bg-black hover:text-white duration-100 justify-center text-center font-thin">
                Influencer Cards
              </h1>
              <h1 className="border rounded-xl p-2 w-[140px] bg-gray-200 cursor-pointer hover:bg-black hover:text-white duration-100 justify-center text-center font-thin">
                Review Cards
              </h1>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 mt-6 bg-blue-50">
              {carddata.map(({ id, name, price, rating, image }) => (
                <div
                  key={id}
                  className="border bg-gray-200 rounded-xl p-4 hover:shadow-xl"
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-44 object-cover rounded-md"
                  />
                  <p className="text-black font-semibold text-lg mt-2">
                    {name}
                  </p>
                  <p className="text-yellow-500">
                    {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                  </p>
                  <p className="text-black font-semibold mt-1">${price}</p>
                  <div className="flex mt-4 gap-2">
                    <button className="flex-1 p-2 bg-black text-white hover:bg-white hover:text-black border border-black duration-300 rounded-md text-sm font-bold" onClick={handleAddToCart}>
                      Add To Cart
                    </button>
                    <button className="flex-1 p-2 bg-black text-white hover:bg-white hover:text-black border border-black duration-300 rounded-md text-sm font-bold">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
