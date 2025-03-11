"use client";

import { AddProductModal } from "@/components/features/add-product-modal";
import { useState, useEffect } from "react";

interface Order {
  id: string;
  name: string;
  orderDate: string;
  location: string;
  length: string;
  color: string;
  style: string;
  type: string;
  wigType: string;
  deliveryDate: string;
  serviceSpeed: string;
  status: "pending" | "processing" | "completed" | "cancelled";
}

const mockOrders: Order[] = [
  {
    id: "1",
    name: "Alice Johnson",
    orderDate: "2023-06-01",
    location: "New York",
    length: "18",
    color: "Black",
    style: "Straight",
    type: "frontal",
    wigType: "Full Lace Wig",
    deliveryDate: "2023-06-15",
    serviceSpeed: "normal",
    status: "pending",
  },
  {
    id: "2",
    name: "Bob Smith",
    orderDate: "2023-06-02",
    location: "Los Angeles",
    length: "22",
    color: "Brown",
    style: "Curly",
    type: "closure",
    wigType: "Lace Front Wig",
    deliveryDate: "2023-06-10",
    serviceSpeed: "express",
    status: "processing",
  },
  // Add more mock orders as needed
];

export default function AdminOrderPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    // In a real application, you would fetch orders from an API here
    setOrders(mockOrders);
    setFilteredOrders(mockOrders);
  }, []);

  useEffect(() => {
    const filtered = orders.filter(
      (order) =>
        (statusFilter === "all" || order.status === statusFilter) &&
        (order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.id.includes(searchTerm))
    );
    setFilteredOrders(filtered);
  }, [orders, searchTerm, statusFilter]);

  const handleStatusChange = (orderId: string, newStatus: Order["status"]) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Order Management</h1>

        <div className="mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search by name or order ID"
            className="p-2 border rounded w-full md:w-64"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="flex items-center space-x-4">
            <select
              className="p-2 border rounded w-full md:w-48"
              value={statusFilter}
              onChange={handleFilterChange}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <div>
             <AddProductModal/>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Wig Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{order.name}</div>
                    <div className="text-xs">{order.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{order.wigType}</div>
                    <div className="text-xs">{`${order.length}", ${order.color}, ${order.style}`}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>
                      {new Date(order.deliveryDate).toLocaleDateString()}
                    </div>
                    <div className="text-xs">{order.serviceSpeed}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "processing"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <select
                      className="text-indigo-600 hover:text-indigo-900 bg-transparent"
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(
                          order.id,
                          e.target.value as Order["status"]
                        )
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-4 text-gray-500">No orders found</div>
        )}
      </div>
    </div>
  );
}
