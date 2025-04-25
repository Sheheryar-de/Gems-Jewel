"use client";

import React from "react";
import Link from "next/link";

const CheckoutPage = () => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-amber-600">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              placeholder="ZIP / Postal Code"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded"
              required
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className="border rounded-lg p-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2 text-sm">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="border-t mt-4 pt-4 text-base font-semibold flex justify-between">
            <span>Total:</span>
            <span className="text-amber-600">₹{totalAmount}</span>
          </div>

          <button
            onClick={() => alert("Order placed successfully!")}
            className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition"
          >
            Place Order
          </button>

          <Link
            href="/cart"
            className="block text-sm text-amber-600 hover:underline text-center mt-4"
          >
            ← Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

const cartItems = [
  {
    id: 1,
    name: "Elegant Gold-Plated Necklace",
    price: 799,
    quantity: 1,
  },
  {
    id: 2,
    name: "Stylish Crystal Earrings",
    price: 399,
    quantity: 2,
  },
];
