import React, { useEffect, useState } from "react";

const Orderdetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: {
            city: "New York",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "12346",
          createdAt: new Date(),
          shippingAddress: {
            city: "New York",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 200,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);
  return (
    <div className="max-w-6xl flex flex-col overflow-x-auto container">
      <h2 className="text-2xl font-semibold">Orderdetails</h2>
      <div className="mt-3">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr className="">
              <th className="text-start border  px-4 text-sm py-2">IMAGE</th>
              <th className="text-start border px-4 py-2 text-sm">ORDER ID</th>
              <th className="text-start border px-4 py-2 text-sm">CREATED</th>
              <th className="text-start border px-4 py-2 text-sm">
                SHIPPING ADDRESS
              </th>
              <th className="text-start border px-4 py-2 text-sm">ITEMS</th>
              <th className="text-start border px-4 py-2 text-sm">Price</th>
              <th className=" text-start border px-4 py-2 text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <img
                    src={order.orderItems[0].image}
                    alt={order.orderItems[0].name}
                    className=" px-4 py-2 w-[80px] h-15"
                  />
                </td>
                <td className="px-4 py-2 text-sm">#{order._id}</td>
                <td className="px-4 py-2 text-sm">{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-2 text-sm">
                  {order.shippingAddress
                    ? `${order.shippingAddress.city} , ${order.shippingAddress.country}`
                    : ""}
                </td>
                <td className="px-4 py-2 text-sm">{order.orderItems.length}</td>
                <td className="px-4 py-2 text-sm ">{order.totalPrice}</td>
                <td className="px-4 py-2 text-sm ">{order.isPaid ? <span className="bg-green-300 p-1 rounded-md text-slate-500">Paid</span> :<span className="bg-green-300 p-1 rounded-md">Pending</span> }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orderdetails;
