"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MdCancelPresentation } from "react-icons/md";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(cartItemsData);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-5xl font-bold mb-8 text-amber-600">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-4 space-y-3"
              >
                {/* Individual Header for each item */}
                <div className="hidden md:grid grid-cols-7 gap-4 font-semibold text-sm uppercase text-gray-500 px-2">
                  <span className="col-span-1">Product</span>
                  <span className="col-span-2">Description</span>
                  <span className="col-span-1">Price</span>
                  <span className="col-span-1">Quantity</span>
                  <span className="col-span-1 text-right">Total</span>
                  <span className="col-span-1 text-right"></span>
                </div>

                {/* Cart Item Row */}
                <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />

                  <div className="md:col-span-2">
                    <h2 className="text-sm font-semibold">{item.name}</h2>
                    <p className="text-xs text-gray-500">
                      Beautiful handcrafted design.
                    </p>
                  </div>

                  <p className="text-sm text-gray-700">₹{item.price}</p>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>

                  <span className="text-amber-600 font-semibold text-right">
                    ₹{item.price * item.quantity}
                  </span>

                  <div className="flex justify-end">
                    <MdCancelPresentation
                      className="text-xl text-red-500 cursor-pointer hover:text-red-600"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping Link */}
            <Link
              href="/"
              className="inline-block text-amber-600 hover:underline text-sm mt-4"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Cart Summary */}
          <div className="md:w-1/4 border rounded-lg p-6 shadow-sm h-fit">
            <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-base">
              <span>Grand Total</span>
              <span className="text-amber-600">₹{totalAmount}</span>
            </div>
            <Link
              href="/cart/checkout"
              className="mt-6 inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

const cartItemsData = [
  {
    id: 1,
    name: "Elegant Gold-Plated Necklace",
    price: 799,
    quantity: 1,
    image:
      "https://wootandhammy.com/cdn/shop/files/CopperWire-WrappedQuartzCrystalsHandmadeWith24InchChain-AMAZON-9_1024x1024.jpg?v=1714513364",
  },
  {
    id: 2,
    name: "Stylish Crystal Earrings",
    price: 399,
    quantity: 2,
    image:
      "https://www.destiny.pk/cdn/shop/files/78_1024x1024.jpg?v=1733394773",
  },
];
