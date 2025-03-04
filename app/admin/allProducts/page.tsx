"use client"

// import { useState } from "react"
// import Image from "next/image"

// // Mock data for wigs
// const initialWigs = [
//   {
//     id: 1,
//     name: "Brazilian Body Wave",
//     category: "Body Wave",
//     price: 199.99,
//     inches: 18,
//     type: "Frontal",
//     hairType: "Human",
//     color: "Natural Black",
//     imageUrl: "/placeholder.svg?height=100&width=100",
//   },
//   {
//     id: 2,
//     name: "Straight Lace Closure",
//     category: "Straight",
//     price: 149.99,
//     inches: 16,
//     type: "Closure",
//     hairType: "Human",
//     color: "Dark Brown",
//     imageUrl: "/placeholder.svg?height=100&width=100",
//   },
// ]

// export default function AdminPage() {
//   const [wigs, setWigs] = useState(initialWigs)
//   const [activeTab, setActiveTab] = useState("view")
//   const [newWig, setNewWig] = useState({
//     name: "",
//     category: "",
//     price: 0,
//     inches: 0,
//     type: "",
//     hairType: "",
//     color: "",
//     imageUrl: "",
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setNewWig((prev) => ({ ...prev, [name]: value }))
//   }

//   const addWig = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const wigToAdd = { ...newWig, id: wigs.length + 1 }
//     setWigs((prev) => [...prev, wigToAdd])
//     setNewWig({ name: "", category: "", price: 0, inches: 0, type: "", hairType: "", color: "", imageUrl: "" })
//     setActiveTab("view")
//   }

//   const deleteWig = (id:number) => {
//     setWigs(wigs.filter((wig) => wig.id !== id))
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Wig Admin Dashboard</h1>

//       <div className="mb-4">
//         <button
//           onClick={() => setActiveTab("view")}
//           className={`mr-2 px-4 py-2 ${activeTab === "view" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//         >
//           View Wigs
//         </button>
//         <button
//           onClick={() => setActiveTab("add")}
//           className={`px-4 py-2 ${activeTab === "add" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//         >
//           Add New Wig
//         </button>
//       </div>

//       {activeTab === "view" && (
//         <div>
//           <h2 className="text-xl font-semibold mb-2">All Wigs</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2">Image</th>
//                   <th className="px-4 py-2">Name</th>
//                   <th className="px-4 py-2">Category</th>
//                   <th className="px-4 py-2">Price</th>
//                   <th className="px-4 py-2">Inches</th>
//                   <th className="px-4 py-2">Type</th>
//                   <th className="px-4 py-2">Hair Type</th>
//                   <th className="px-4 py-2">Color</th>
//                   <th className="px-4 py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {wigs.map((wig) => (
//                   <tr key={wig.id}>
//                     <td className="px-4 py-2">
//                       <Image src={wig.imageUrl || "/placeholder.svg"} alt={wig.name} width={50} height={50} />
//                     </td>
//                     <td className="px-4 py-2">{wig.name}</td>
//                     <td className="px-4 py-2">{wig.category}</td>
//                     <td className="px-4 py-2">${wig.price.toFixed(2)}</td>
//                     <td className="px-4 py-2">{wig.inches}"</td>
//                     <td className="px-4 py-2">{wig.type}</td>
//                     <td className="px-4 py-2">{wig.hairType}</td>
//                     <td className="px-4 py-2">{wig.color}</td>
//                     <td className="px-4 py-2">
//                       <button onClick={() => deleteWig(wig.id)} className="bg-red-500 text-white px-2 py-1 rounded">
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {activeTab === "add" && (
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Add New Wig</h2>
//           <form onSubmit={addWig} className="space-y-4">
//             <div>
//               <label className="block">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={newWig.name}
//                 onChange={handleInputChange}
//                 className="w-full border p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block">Category:</label>
//               <input
//                 type="text"
//                 name="category"
//                 value={newWig.category}
//                 onChange={handleInputChange}
//                 className="w-full border p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block">Price:</label>
//               <input
//                 type="number"
//                 name="price"
//                 value={newWig.price}
//                 onChange={handleInputChange}
//                 className="w-full border p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block">Inches:</label>
//               <input
//                 type="number"
//                 name="inches"
//                 value={newWig.inches}
//                 onChange={handleInputChange}
//                 className="w-full border p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block">Type:</label>
//               <select
//                 name="type"
//                 value={newWig.type}
//                 onChange={handleInputChange}
//                 className="w-full border p-2"
//                 required
//               >
//                 <option value="">Select Type</option>
//                 <option value="Frontal">Frontal</option>
//                 <option value="Closure">Closure</option>
//               </select>
//             </div>
//             <div>
//               <label className="block">Hair Type:</label>
//               <select
//                 name="hairType"
//                 value={newWig.hairType}
//                 onChange={handleInputChange}
//                 className="w-full border p-2"
//                 required
//               >
//                 <option value="">Select Hair Type</option>
//                 <option value="Human">Human</option>
//                 <option value="Synthetic">Synthetic</option>
//               </select>
//             </div>
//             <div>
//               <label className="block">Color:</label>
//               <input
//                 type="text"
//                 name="color"
//                 value={newWig.color}
//                 onChange={handleInputChange}
//                 className="w-full border p-2"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block">Image URL:</label>
//               <input
//                 type="text"
//                 name="imageUrl"
//                 value={newWig.imageUrl}
//                 onChange={handleInputChange}
//                 className="w-full border p-2"
//                 required
//               />
//             </div>
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//               Add Wig
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   )
// }

"use client";

import { useState } from "react";
import Image from "next/image";

// Mock data for wigs
const initialWigs = [
  {
    id: 1,
    name: "Brazilian Body Wave",
    category: "Body Wave",
    price: 199.99,
    inches: 18,
    type: "Frontal",
    hairType: "Human",
    color: "Natural Black",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Straight Lace Closure",
    category: "Straight",
    price: 149.99,
    inches: 16,
    type: "Closure",
    hairType: "Human",
    color: "Dark Brown",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
];

export default function AdminPage() {
  const [wigs, setWigs] = useState(initialWigs);
  const [activeTab, setActiveTab] = useState("view");
  const [newWig, setNewWig] = useState({
    name: "",
    category: "",
    price: 0,
    inches: 0,
    type: "",
    hairType: "",
    color: "",
    imageFile: null as File | null, // Stores the uploaded image file
    imageUrl: "", // Stores the preview URL for display
  });

  // Handle text input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewWig((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create preview URL
      setNewWig((prev) => ({ ...prev, imageFile: file, imageUrl }));
    }
  };

  const addWig = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const wigToAdd = { ...newWig, id: wigs.length + 1 };
    setWigs((prev) => [...prev, wigToAdd]);
    setNewWig({
      name: "",
      category: "",
      price: 0,
      inches: 0,
      type: "",
      hairType: "",
      color: "",
      imageFile: null,
      imageUrl: "",
    });
    setActiveTab("view");
  };

  const deleteWig = (id: number) => {
    setWigs(wigs.filter((wig) => wig.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Wig Admin Dashboard</h1>

      <div className="mb-4">
        <button
          onClick={() => setActiveTab("view")}
          className={`mr-2 px-4 py-2 ${activeTab === "view" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          View Wigs
        </button>
        <button
          onClick={() => setActiveTab("add")}
          className={`px-4 py-2 ${activeTab === "add" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Add New Wig
        </button>
      </div>

      {activeTab === "view" && (
        <div>
          <h2 className="text-xl font-semibold mb-2">All Wigs</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Inches</th>
                  <th className="px-4 py-2">Type</th>
                  <th className="px-4 py-2">Hair Type</th>
                  <th className="px-4 py-2">Color</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                {wigs.map((wig) => (
                  <tr key={wig.id} >
                    <td className="px-4 py-2 flex justify-center">
                      <Image src={wig.imageUrl || "/placeholder.svg"} alt={wig.name} width={50} height={50} />
                    </td>
                    <td className="px-4 py-2 text-center">{wig.name}</td>
                    <td className="px-4 py-2 text-center">{wig.category}</td>
                    <td className="px-4 py-2 text-center">${wig.price}</td>
                    <td className="px-4 py-2 text-center">{wig.inches}</td>
                    <td className="px-4 py-2 text-center">{wig.type}</td>
                    <td className="px-4 py-2 text-center">{wig.hairType}</td>
                    <td className="px-4 py-2 text-center">{wig.color}</td>
                    <td className="px-4 py-2 text-center">
                      <button onClick={() => deleteWig(wig.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "add" && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Add New Wig</h2>
          <form onSubmit={addWig} className="space-y-4">
          <div>
               <label className="block">Name:</label>
              <input
                type="text"
                name="name"
                value={newWig.name}
                onChange={handleInputChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block">Category:</label>
              <input
                type="text"
                name="category"
                value={newWig.category}
                onChange={handleInputChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block">Price:</label>
              <input
                type="number"
                name="price"
                value={newWig.price}
                onChange={handleInputChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block">Inches:</label>
              <input
                type="number"
                name="inches"
                value={newWig.inches}
                onChange={handleInputChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block">Type:</label>
              <select
                name="type"
                value={newWig.type}
                onChange={handleInputChange}
                className="w-full border p-2"
                required
              >
                <option value="">Select Type</option>
                <option value="Frontal">Frontal</option>
                <option value="Closure">Closure</option>
              </select>
            </div>
            <div>
              <label className="block">Hair Type:</label>
              <select
                name="hairType"
                value={newWig.hairType}
                onChange={handleInputChange}
                className="w-full border p-2"
                required
              >
                <option value="">Select Hair Type</option>
                <option value="Human">Human</option>
                <option value="Synthetic">Synthetic</option>
              </select>
            </div>
            <div>
              <label className="block">Color:</label>
              <input
                type="text"
                name="color"
                value={newWig.color}
                onChange={handleInputChange}
                className="w-full border p-2"
                required
              />
            </div>
            <div>
              <label className="block">Upload Image:</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border p-2" required />
              {newWig.imageUrl && (
                <div className="mt-3">
                  <p>Image Preview:</p>
                  <Image src={newWig.imageUrl} alt="Preview" width={100} height={100} className="border" />
                </div>
              )}
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Add Wig
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
