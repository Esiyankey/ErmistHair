"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slice/productSLice";
import { AppDispatch, RootState } from "@/store/store";
import { AddProductModal } from "@/components/features/add-product-modal";

export default function AdminPage() {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Wig Admin Dashboard</h1>

      <div className="mb-4 flex gap-4 mt-12">
        <h2 className="text-xl font-semibold mb-2">All Wigs</h2>
        <div>
          <AddProductModal />
        </div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Inches</th>
                <th className="px-4 py-2">Hair Type</th>
                <th className="px-4 py-2">Color</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody className="">
              {products.map((product) => (
                <tr key={product.productId}>
                  <td className="px-4 py-2 flex justify-center">
                    <Image
                      src={`http://localhost:3030/${product.productImage}`}
                      alt={"image"}
                      width={50}
                      height={50}
                    />
                  </td>
                  <td className="px-4 py-2 text-center">
                    {product.productName}
                  </td>
                  <td className="px-4 py-2 text-center">{product.category}</td>
                  <td className="px-4 py-2 text-center">
                    ${product.productPrice}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {product.hairLength}
                  </td>
                  <td className="px-4 py-2 text-center">{product.hairType}</td>
                  <td className="px-4 py-2 text-center">{product.hairColor}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      // onClick={() => deleteWig(product.productId)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
