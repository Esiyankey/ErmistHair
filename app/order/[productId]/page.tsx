

"use client"

import { useEffect, useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slice/productSLice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams } from "next/navigation";
import Link from "next/link";

const wigTypes = ["Full Lace Wig", "Lace Front Wig", "U-Part Wig", "360 Lace Wig", "Glueless Wig", "HD Lace Wig"]

const wigStyles = ["Straight", "Body Wave", "Deep Wave", "Loose Wave", "Kinky Straight", "Curly"]

export default function OrderForm() {
  
  

  const dispatch: AppDispatch = useDispatch();
  const { products } = useSelector(
    (state: RootState) => state.products
  );

useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    const params = useParams()
    const productId = params.productId as string;
    console.log(productId);
    const product = products.find((product) => product.productId === productId);
    console.log(`the product name is ${product?.productName}`);


  const [formData, setFormData] = useState({
    productId:productId,
    customerName: "",
    orderDate: new Date().toISOString().split("T")[0],
    location: "",
    length: "",
    color: "",
    styleType: "",
    frontalType: "",
    wigType: "",
    deliveryDate: "",
    serviceType: "normal",
  })
  const [showSummary, setShowSummary] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    console.log("review order clicked")
    setShowSummary(true)
  }

  const handleFinalSubmit = async() => {
   
  const isValid = Object.values(formData).every(value => value !== "" && value !== undefined);
  if (!isValid) {
    alert("Please fill out all required fields before submitting.");
  }
try{


  const response = await fetch("http://localhost:3030/api/v1/order/order", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json(); // Parse response
    console.log("Server response:", data); // Log full response

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit order");
    }
    console.log("Final submission:", formData)
    setShowSummary(false)
}
catch(error) {
 console.error("An unexpected error occurred:", error)
  }
}

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
        <Link href="/" className="h-8 w-8 rounded-full border flex justify-center items-center ">
            <IoIosArrowRoundBack />
        </Link>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="text-center py-6 bg-[#e75e8d]">
          <h1 className="text-3xl font-bold text-white">Ermist Hair</h1>
          <p className="text-white">Custom Wig Order Form</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Wig Name</label>
            {product?.productName}
            </div>
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.customerName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="orderDate" className="block text-sm font-medium text-gray-700">
              Order Date
            </label>
            <input
              type="date"
              id="orderDate"
              name="orderDate"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.orderDate}
              onChange={handleChange}
              disabled
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="length" className="block text-sm font-medium text-gray-700">
              Length (inches)
            </label>
            <input
              type="number"
              id="length"
              name="length"
              required
              min="8"
              max="40"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.length}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.color}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="styleType" className="block text-sm font-medium text-gray-700">
              Style
            </label>
            <select
              id="styleType"
              name="styleType"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.styleType}
              onChange={handleChange}
            >
              <option value="">Select style</option>
              {wigStyles.map((styleType) => (
                <option key={styleType} value={styleType.toLowerCase()}>
                  {styleType}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Frontal or Closure
            </label>
            <select
              id="frontalType"
              name="frontalType"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.frontalType}
              onChange={handleChange}
            >
              <option value="">Select type</option>
              <option value="frontal">Frontal</option>
              <option value="closure">Closure</option>
            </select>
          </div>

          <div>
            <label htmlFor="wigType" className="block text-sm font-medium text-gray-700">
              Wig Type
            </label>
            <select
              id="wigType"
              name="wigType"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.wigType}
              onChange={handleChange}
            >
              <option value="">Select wig type</option>
              {wigTypes.map((type) => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
              Delivery Date
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.deliveryDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
              Service Speed
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="normal">Normal</option>
              <option value="express">Express</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#e75e8d] text-white py-2 px-4 rounded-md hover:bg-[#d54d7c] transition duration-300"
          >
            Review Order
          </button>
        </form>
      </div>

      {showSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="flex justify-between mb-2">
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowSummary(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300"
              >
                Edit Order
              </button>
              <button
                onClick={handleFinalSubmit}
                className="px-4 py-2 bg-[#e75e8d] text-white rounded-md hover:bg-[#d54d7c] transition duration-300"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

