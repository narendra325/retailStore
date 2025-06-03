import React, { useState } from "react";
import PaypalButton from "./PaypalButton";
import { useNavigate } from "react-router-dom";

  const cartProducts = {
    products: [
      {
        productId: 1,
        name: "Jeans",
        size: "M",
        Price: 50,
        color: "white",
        quantity: 1,
        image: "https://picsum.photos/200?random=1",
      },
      {
        productId: 2,
        name: "T-shirt",
        size: "M",
        Price: 20,
        color: "black",
        quantity: 1,
        image: "https://picsum.photos/200?random=2",
      },
      {
        productId: 3,
        name: "T-shirt",
        size: "M",
        Price: 100,
        color: "black",
        quantity: 1,
        image: "https://picsum.photos/200?random=3",
      },
      {
        productId: 4,
        name: "T-shirt",
        size: "M",
        Price: 50,
        color: "black",
        quantity: 1,
        image: "https://picsum.photos/200?random=4",
      },
      {
        productId: 5,
        name: "T-shirt",
        size: "M",
        Price: 50,
        color: "black",
        quantity: 1,
        image: "https://picsum.photos/200?random=5",
      },
    ],
    totalPrice: 270,
  };

const Checkout = () => {
  const [showPaypal, setShowPaypal] = useState(false);

  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    city: "",
    phone: "",
    address: "",
    postalCode: "",
    country: "",
  });

  const handleCreatePayment = (e) => {
    e.preventDefault();
    setShowPaypal(true);
  };

  const handlePaymentSuccess = (details) => {
    console.log(details);
    navigate("/orderconfirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-8 px-6 py-10 tracking-tighter max-w-7xl">
      <div className="bg-white rounded-lg p-6 ">
        <h2 className="text-2xl font-semibold uppercase mb-5">Checkout</h2>
        <form onSubmit={handleCreatePayment}>
          <h3 className="mb-3 font-semibold">Contact Details</h3>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={shippingAddress.email}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  email: e.target.value,
                })
              }
              required
              className="w-full mt-2 border  p-2 rounded "
            ></input>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold">Delivery Address</h3>
          </div>
          <div className="grid grid-cols-2 mt-3 gap-4">
            <div>
              <label>First Name </label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                required
                className="w-full mt-2 text-gray-700 p-2 border rounded"
              ></input>
            </div>
            <div>
              <label>Last Name </label>
              <input
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                required
                type="text"
                className=" w-full mt-2 text-grey-700 border p-2 rounded"
              ></input>
            </div>
          </div>

          <div className="mt-2">
            <label>Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              required
              className="w-full mt-2 border  p-2 rounded "
            ></input>
          </div>

          <div className="grid grid-cols-2 mt-3 gap-4">
            <div>
              <label>City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                required
                className="w-full mt-2 text-gray-700 p-2 border rounded"
              ></input>
            </div>
            <div>
              <label>Postal Code </label>
              <input
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                required
                type="text"
                className=" w-full mt-2 text-grey-700 border p-2 rounded"
              ></input>
            </div>
          </div>

          <div className="mt-3">
            <label>Country</label>
            <input
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              required
              type="text"
              className="w-full mt-2 p-2 border rounded"
            ></input>
          </div>
          <div className="mt-3">
            <label>Phone</label>
            <input
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              required
              type="number"
              className="w-full mt-2 p-2 border rounded"
            ></input>
          </div>
          {!showPaypal ? (
            <button
              type="submit"
              className="w-full bg-black text-white p-2 mt-3  rounded"
            >
              Continue to Payment
            </button>
          ) : (
            <div className="mt-2">
              <p className="mb-2">Pay with PayPal</p>
              <PaypalButton
                amount={"100"}
                onSuccess={handlePaymentSuccess}
                onError={(err) => console.error("Payment failed", err)}
              />
            </div>
          )}
        </form>
      </div>
      <div className="bg-slate-100 p-6 rounded-md">
        <h2 className="text-xl font-medium uppercase mb-5">Order Summery</h2>
        <div className="border p-2 ">
          {cartProducts.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between border-b"
            >
              <div className="flex items-start  space-x-3 py-2  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-md text-gray-500">Size :{product.size}</p>
                  <p className="text-md text-gray-500">
                    Color : {product.color}
                  </p>
                </div>
              </div>
              <div>
                <p className=" px-5 py-2 text-lg font-bold">
                  ${product.Price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-start justify-between px-6 py-1">
          <p className="text-slate-500">Sub Price</p>
          <p className="text-slate-500">${cartProducts.totalPrice.toLocaleString()}</p>
        </div>
        <div className="flex items-start justify-between px-6 py-1 border-b">
          <p className="text-slate-500">Shipping</p>
          <p className="text-slate-500">Free</p>
        </div>
        <div className="flex items-start justify-between px-6 py-1">
          <p className="text-lg">Total Price</p>
          <p className="text-lg">${cartProducts.totalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
