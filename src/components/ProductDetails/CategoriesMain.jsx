import React, { useState } from "react";
import flowerImage from "../../assets/images/flower.png";
import { toast } from "react-toastify";

const CategoriesMain = () => {
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    toast.success("Product purchased successfully!");
  };

  const handleAddToCart = () => {
    toast.info("Product added to cart!");
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto mt-[80px]">
      <div className="grid items-start grid-cols-1 gap-4 text-left md:grid-cols-2">
        <div className="flex flex-col items-center">
          <img
            src={flowerImage}
            alt="Barberton Daisy"
            className="object-contain w-[300px] h-34"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Barberton Daisy</h1>
          <p className="my-2 text-xl text-green-600">$119.00</p>
          <p className="text-gray-700">
            Short Description: <br /> The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground. The ceramic
            cylinder planters come with a wooden stand to help elevate your
            plants off the ground.
          </p>
          <div className="my-4">
            <span className="font-semibold text-gray-800">Size:</span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 transition duration-300 border hover:bg-green-500 hover:text-white">
                S
              </button>
              <button className="px-3 py-1 transition duration-300 border hover:bg-green-500 hover:text-white">
                M
              </button>
              <button className="px-3 py-1 transition duration-300 border hover:bg-green-500 hover:text-white">
                L
              </button>
              <button className="px-3 py-1 transition duration-300 border hover:bg-green-500 hover:text-white">
                XL
              </button>
            </div>
          </div>
          <div className="flex items-center my-4 space-x-4">
            <button onClick={decrementQuantity} className="text-2xl">
              -
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity} className="text-2xl">
              +
            </button>
          </div>
          <button
            className="px-4 py-2 text-white transition duration-500 bg-green-600 rounded hover:bg-green-700"
            onClick={handleBuyNow}
          >
            BUY NOW
          </button>

          <button
            className="px-4 py-2 ml-2 text-black transition duration-500 bg-gray-300 rounded hover:bg-gray-400"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMain;
