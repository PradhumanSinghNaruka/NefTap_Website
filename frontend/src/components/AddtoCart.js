import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AddtoCart({ cartItems, onRemove }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="mt-24 p-4">
      <h1 className="text-4xl font-semibold text-center mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">No product added to cart.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Product Name</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Action</th>
                <th className="p-2 border">Buy</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="border p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-24 object-cover mx-auto"
                    />
                  </td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">${item.price}</td>
                  <td className="border p-2">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                      onClick={() => onRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                  <td className="border p-2">
                    <button
                      className="bg-black text-white px-4 py-1 rounded hover:bg-blue-200 hover:text-black hover:border-black duration-300"
                      onClick={() => navigate("/printing")}
                    >
                      Buy Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AddtoCart;

