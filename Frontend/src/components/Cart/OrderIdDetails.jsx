import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OrderIdDetails = () => {
  const { id } = useParams();
  const [orderIdDetails, setOrderIdDetails] = useState(null);

  useEffect(() => {
    const mockOrderdetails = {
      _id: "12345",
      createdAt: new Date(),
      paymentmode: "Paypal",
      paymentStatus: true,
      delivered: false,
      Approved: true,
      shippingAddress: ["New York", "USA"],
      shippingMethod: "Delivery.com",
      products: [
        {
          _id: "12345",
          name: "shirt",
          price: 30,
          quantity: 1, // ✅ corrected spelling
          totalPrice: 100,
          image: "https://picsum.photos/200?random=2",
        },
        {
          _id: "12346",
          name: "pants",
          price: 50,
          quantity: 2,
          totalPrice: 100,
          image: "https://picsum.photos/200?random=1",
        },
      ],
    };

    setOrderIdDetails(mockOrderdetails);
  }, [id]);

  if (!orderIdDetails) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div>
        <h2 className="font-bold text-xl mb-7">Order Details</h2>
      </div>
      <div className="p-6 border bg-white">
        <div className="flex justify-between">
          <div>
            <h3>Order ID: {orderIdDetails._id}</h3>
            <p>{new Date(orderIdDetails.createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="bg-green-300 text-center rounded-full font-semibold text-xs">
              {orderIdDetails.Approved ? "Approved" : "Not Approved"}
            </p>
            <p className="bg-yellow-300 px-4 text-center rounded-lg font-bold  mt-1 text-xs">
              {orderIdDetails.delivered ? "Delivered" : "Pending delivery"}
            </p>
          </div>
        </div>
        <div className="grid py-6 grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <p>Payment info</p>
            <p>payment Method :{orderIdDetails.paymentmode}</p>
            <p>Status :{orderIdDetails.paymentStatus ? "Paid" : "Not Paid"}</p>
          </div>
          <div>
            <p>Shipping info</p>
            <p>Shipping Method :{orderIdDetails.shippingMethod}</p>
            <p>
              Shipping Address:
              {orderIdDetails.shippingAddress.map((line, index) => (
                <span key={index}>{line},</span>
              ))}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Product Name</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {orderIdDetails.products.map((product, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2 text-left">
                    <Link
                      to={`/product/${product._id}`}
                      className="flex items-center hover:underline text-blue-600"
                    >
                      <img
                        className="w-10 h-10 rounded"
                        src={product.image}
                        alt={product.name}
                      />
                      <span className="px-4">{product.name}</span>
                    </Link>
                  </td>

                  <td className="border px-4 py-2">${product.price}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2">${product.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3">
          <Link to="/my-orders" className="text-sm text-blue-500 ">
            back to my orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderIdDetails;
