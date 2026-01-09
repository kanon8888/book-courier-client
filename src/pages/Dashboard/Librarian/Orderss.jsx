import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  // 🔹 Orders load from localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("myOrders")) || [];
    setOrders(storedOrders);
  }, []);

  // 🔹 Cancel Order
  const handleCancel = (orderId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This order will be cancelled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedOrders = orders.filter(
          (order) => order.orderId !== orderId
        );

        setOrders(updatedOrders);
        localStorage.setItem("myOrders", JSON.stringify(updatedOrders));

        Swal.fire("Cancelled!", "Order has been cancelled.", "success");
      }
    });
  };

  // 🔹 Change Order Status
  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.orderId === orderId
        ? { ...order, status: newStatus }
        : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("myOrders", JSON.stringify(updatedOrders));

    Swal.fire("Updated!", "Order status updated successfully.", "success");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-fuchsia-600">
        Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>Author</th>
                <th>Price</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order.orderId} className="text-center">
                  <td>{index + 1}</td>

                  <td className="flex items-center gap-3">
                    <img
                      src={order.image}
                      alt={order.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <span>{order.name}</span>
                  </td>

                  <td>{order.author}</td>
                  <td>৳ {order.price}</td>
                  <td>
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>

                  {/* Status Dropdown */}
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.orderId, e.target.value)
                      }
                      className="select select-bordered select-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>

                  {/* Actions */}
                  <td>
                    {order.status === "pending" ? (
                      <button
                        onClick={() => handleCancel(order.orderId)}
                        className="relative inline-flex items-center justify-center px-4 py-2 btn-sm overflow-hidden font-medium transition-all bg-red-500 rounded-lg shadow text-white group hover:bg-red-600 hover:shadow-lg"
                      >
                        <span className="w-24 h-24 rounded rotate-[-40deg] bg-red-700 absolute bottom-0 left-0 -translate-x-full translate-y-full mb-4 ml-4 ease-out duration-500 transition-all group-hover:ml-0 group-hover:mb-16 group-hover:translate-x-0"></span>
                        <span className="relative text-white transition-colors duration-300 text-sm">
                          Cancel
                        </span>
                      </button>

                    ) : (
                      <span className="text-green-600 font-semibold">
                        Completed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
