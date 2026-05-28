import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 mt-4">Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="bg-white p-4 mt-3 shadow rounded">
            <h3>{item.name}</h3>
            <p>Rs {item.price}</p>

            <button
              onClick={() => removeFromCart(index)}
              className="mt-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}