import React from "react";

const orderitems = {
  _id: 12345,
  createdAt: new Date(),
  checkoutItems: [
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
  shippingAddress: {
    address: "tellapur",
    city: "hyderabad",
    country: "India",
  },
};

const OrderConfirmation = () => {
  const estimatedDeliveryTime = (createdAt) => {
    let orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); // ✅ Corrected
    return orderDate.toLocaleDateString(); // or use toLocaleDateString()
  };

  return (
    <div className="max-w-3xl p-6 bg-white mx-auto">
      <h2 className="text-4xl text-green-500 text-center font-bold mb-4">
        Thankyou for your order
      </h2>

      <div className="border rounded p-5">
        <div className="flex justify-between">
          <div>
            <p>orderId :{orderitems._id}</p>
            <p>orderTime : {orderitems.createdAt.toLocaleDateString()}</p>
          </div>
          <div>
            <p>
              Estimated DeliveryTime :
              {estimatedDeliveryTime(orderitems.createdAt)}
            </p>
          </div>
        </div>
        <div className=" p-2 ">
          {orderitems.checkoutItems.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between border-b"
            >
              <div className="flex items-start  space-x-3 py-2  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-20 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-md text-gray-500">Size :{product.size}</p>
                  <p className="text-md text-gray-500">
                    Color : {product.color}
                  </p>
                </div>
              </div>
              <div className="items-start px-5 py-2">
                <p className="text-lg font-bold">
                  Price : ${product.Price.toLocaleString()}
                </p>
                <p className="text-slate-500">Quantity :{product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" p-6 grid grid-cols-2 ">
          <div className="text-start">
            <p className="font-bold">Payment</p>
            <p>PayPal</p>
          </div>
          <div className="text-start">
            <p className="font-bold">Delivery</p>
            <p>{orderitems.shippingAddress.address}</p>
            <span >{orderitems.shippingAddress.city},</span>
            <span className="px-1">{orderitems.shippingAddress.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
