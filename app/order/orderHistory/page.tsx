import type { Metadata } from "next"
import Link from "next/link"
import { CalendarIcon, ChevronRightIcon, PackageIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Order History",
  description: "View your order history and track your purchases",
}

// This would typically come from an API or database
const orders = [
  {
    id: "ORD-1234",
    date: "2023-11-14",
    status: "Delivered",
    items: [
      { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1 },
      { id: 2, name: "Phone Case", price: 19.99, quantity: 1 },
    ],
    total: 99.98,
  },
  {
    id: "ORD-1235",
    date: "2023-10-28",
    status: "Delivered",
    items: [{ id: 3, name: "Smart Watch", price: 199.99, quantity: 1 }],
    total: 199.99,
  },
  {
    id: "ORD-1236",
    date: "2023-10-15",
    status: "Delivered",
    items: [
      { id: 4, name: "Bluetooth Speaker", price: 59.99, quantity: 1 },
      { id: 5, name: "USB-C Cable", price: 12.99, quantity: 2 },
    ],
    total: 85.97,
  },
  {
    id: "ORD-1237",
    date: "2023-09-30",
    status: "Delivered",
    items: [{ id: 6, name: "Laptop Sleeve", price: 29.99, quantity: 1 }],
    total: 29.99,
  },
]

export default function OrderHistoryPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Order History</h1>
          <p className="text-muted-foreground">View and track all your previous orders</p>
        </div>
        <div className="relative w-full md:w-auto">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search orders..." className="pl-8 w-full md:w-[300px]" />
        </div>
      </div>

      <Separator />

      <div className="grid gap-6">
        {orders.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <CardHeader className="bg-muted/40 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {new Date(order.date).toLocaleDateString()}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={order.status === "Delivered" ? "default" : "outline"}>{order.status}</Badge>
                  <Link href={`/orders/${order.id}`}>
                    <Button variant="outline" size="sm" className="gap-1">
                      Details
                      <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded bg-muted flex items-center justify-center">
                        <PackageIcon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-muted/40 p-4 sm:p-6 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                {order.items.reduce((acc, item) => acc + item.quantity, 0)} items
              </p>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-lg font-bold">${order.total.toFixed(2)}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

