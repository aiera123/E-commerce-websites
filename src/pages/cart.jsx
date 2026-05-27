import React from "react";

function Cart() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="border p-4 rounded-lg shadow-md flex items-center gap-4">
        <img
          src="/assets/lipgloss.jpg"
          alt="Lip Gloss"
          className="w-24 h-24 object-cover rounded"
        />

        <div>
          <h2 className="text-xl font-semibold">High Shine Lip Gloss</h2>
          <p className="text-gray-600">Quantity: 1</p>
          <p className="font-bold">Rs. 899</p>
        </div>
      </div>

      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold">Total: Rs. 899</h2>

        <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;