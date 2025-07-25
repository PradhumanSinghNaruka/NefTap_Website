import React, { useEffect } from "react";
import { href, useLocation, useNavigate } from "react-router-dom";

function Shop({onAddToCart}) {
  const carddata = [
    {
      id: 1,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.03-PM-7.jpeg",
      name: "Black Elite Neftap Card",
      price: "899",
      rating: 5,
    },
    {
      id: 2,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.03-PM-6.jpeg",
      name: "Golden Luxe Neftap Card",
      price: "899",
      rating: 5,
    },
    {
      id: 3,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.03-PM-5.jpeg",
      name: "Royal Curve Neftap Card",
      price: "899",
      rating: 5,
    },
    {
      id: 4,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.03-PM-4.jpeg",
      name: "Urban Edge Neftap Card",
      price: "899",
      rating: 4.5,
    },
    {
      id: 5,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.03-PM-3.jpeg",
      name: "White Modern Neftap Card",
      price: "899",
      rating: 5,
    },
    {
      id: 6,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.03-PM-2.jpeg",
      name: "Red Stripe Neftap Card",
      price: "899",
      rating: 4.2,
    },
    {
      id: 7,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.03-PM-1.jpeg",
      name: "Graphite Bold Neftap Card",
      price: "899",
      rating: 4.2,
    },
    {
      id: 8,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.03-PM.jpeg",
      name: "DualTone Neftap Card",
      price: "899",
      rating: 4.2,
    },
    {
      id: 9,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.01-PM-1.jpeg",
      name: "CornerStreak Neftap Card",
      price: "899",
      rating: 4.2,
    },
    {
      id: 10,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.40.01-PM.jpeg",
      name: "WaveLine Neftap Card",
      price: "899",
      rating: 4.2,
    },
    {
      id: 11,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.30.26-PM.jpeg",
      name: "Shadow Luxe Neftap Card",
      price: "899",
      rating: 4.2,
    },
    {
      id: 12,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-06-at-6.30.25-PM.jpeg",
      name: "Transparent Smart Card",
      price: "1,021",
      rating: 5,
    },
    {
      id: 13,
      image:
        "http://neftap.digiroket.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-05-at-6.33.43-PM.jpeg",
      name: "Classic Red Neftap Card",
      price: "899",
      rating: 5,
    },
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto mb-8 md:mb-12">
        <div name="/influencer" className="text-black mb-0 mt-24">
          <div className="bg-white">
            <div className="">
              <h1 className="text-2xl md:text-4xl font-semibold mt-4 md:mt-8 ml-6 md:ml-20">
                <span className="text-black leading tight bg-clip-text">Metal Business Cards </span>
                <span className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent"> With QR Code</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:ml-20 md:mr-20">
                {carddata.map((item) => (
                  <div
                    key={item.id}
                    className="border bg-gray-200 rounded-xl p-2 hover:shadow-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[240px] w-[550px] object-cover rounded-md"
                    />
                    <p className="text-black font-semibold text-lg mt-2">
                      {item.name}
                    </p>
                    <p className="text-yellow-500">
                      {"★".repeat(Math.floor(item.rating))}
                      {"☆".repeat(5 - Math.floor(item.rating))}
                    </p>
                    <p className="text-black text-xl font-semibold mt-1">
                      ₹{item.price}
                    </p>
                    <div className="flex mt-4 gap-2">
                      <button
                        className="flex-1 p-2 bg-black text-white hover:bg-white hover:text-black border border-black duration-300 rounded-md text-sm font-bold"
                        onClick={() => onAddToCart(item)}
                      >
                        Add To Cart
                      </button>
                      <button
                        className="flex-1 p-2 bg-black text-white hover:bg-white hover:text-black border border-black duration-300 rounded-md text-sm font-bold"
                        onClick={() => navigate("/printing")}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
