import type { Metadata } from "next"
import Link from "next/link"
// import Image from "next/image"
import { ArrowLeftIcon, CalendarIcon, TruckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Order Details",
  description: "View details of your order",
}



export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the order details using the ID
  // const { id } = params;

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex items-center gap-2">
        <Link href="/orders">
          <Button variant="ghost" size="icon">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back to orders</span>
          </Button>
        </Link>
        {/* <h1 className="text-3xl font-bold tracking-tight">Order {order.id}</h1> */}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Order Summary</CardTitle>
                <Badge >pending</Badge>
              </div>
              <CardDescription className="flex items-center">
                <CalendarIcon className="mr-1 h-3 w-3" />
                Ordered on 
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* {order.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-20 w-20 rounded bg-muted flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              ))} */}
            </CardContent>
            <Separator />
            <CardFooter className="p-6">
              {/* <div className="w-full space-y-2">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p>${order.subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Shipping</p>
                  <p>{order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Tax</p>
                  <p>${order.tax.toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <p>Total</p>
                  <p>${order.total.toFixed(2)}</p>
                </div>
              </div> */}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TruckIcon className="h-5 w-5" />
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* <div>
                <h3 className="font-medium">Delivery Status</h3>
                <p className="text-sm text-muted-foreground">
                  {order.status === "Delivered"
                    ? `Delivered on ${new Date(order.deliveryDate).toLocaleDateString()}`
                    : `Expected delivery on ${new Date(order.deliveryDate).toLocaleDateString()}`}
                </p>
              </div>
              <div>
                <h3 className="font-medium">Tracking Number</h3>
                <p className="text-sm">{order.trackingNumber}</p>
              </div>
              <Button variant="outline" size="sm">
                Track Package
              </Button> */}
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-[350px] space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <address className="not-italic">
                <p>{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.street}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                </p>
                <p>{order.shippingAddress.country}</p>
              </address> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <p>{order.paymentMethod}</p> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full">
                Return Items
              </Button>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


