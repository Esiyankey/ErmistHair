"use client"

import { Package } from "lucide-react"
import { AddProductModal } from "@/components/features/add-product-modal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsAdminPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Hair Products</h1>
        <AddProductModal />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Example product cards - in a real app, these would be populated from your database */}
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Brazilian Straight Hair</CardTitle>
              <CardDescription>Frontal • 18 inches • Natural Black</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div className="flex items-center">
                <Package className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>In Stock</span>
              </div>
              <div className="font-bold">$129.99</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

