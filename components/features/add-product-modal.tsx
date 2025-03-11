"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Upload, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem,FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  productName: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  productPrice: z.coerce.number().positive({
    message: "Price must be a positive number.",
  }),
  hairType: z.enum(["frontal", "closure"], {
    required_error: "Please select a hair type.",
  }),
  hairColor: z.string().min(2, {
    message: "Hair color must be at least 2 characters.",
  }),
  hairLength: z.coerce.number().positive({
    message: "Hair length must be a positive number.",
  }),
  productImage: z.instanceof(File).optional(),
})

type ProductFormValues = z.infer<typeof formSchema>

export function AddProductModal() {
  const [open, setOpen] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      productPrice: undefined,
      hairType: undefined,
      hairColor: "",
      hairLength: undefined,
    },
  })

  async function onSubmit(values: ProductFormValues) {
    console.log(values)
   try{
    const postProduct = await fetch("http://localhost:3030/api/v1/product/addProduct",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(values)
    })

    const data = postProduct.json()
    console.log(data)
   }catch(error) {
    console.error("An unexpected error occurred:", error)
  } finally {
    setIsLoading(false);
  }
    form.reset()
    setImagePreview(null)
    setOpen(false)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      form.setValue("productImage", file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearImage = () => {
    form.setValue("productImage", undefined)
    setImagePreview(null)
    const fileInput = document.getElementById("image-upload") as HTMLInputElement
    if (fileInput) fileInput.value = ""
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Hair Product</DialogTitle>
          <DialogDescription>Fill in the details to add a new hair product to your inventory.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <label>Product Name</label>
                  <FormControl>
                    <Input placeholder="Brazilian Straight Hair" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productPrice"
              render={({ field }) => (
                <FormItem>
                  <label>Price ($)</label>
                  <FormControl>
                    <Input type="number" placeholder="99.99" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hairType"
              render={({ field }) => (
                <FormItem>
                  <label>Hair Type</label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select hair type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="frontal">Frontal</SelectItem>
                      <SelectItem value="closure">Closure</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hairColor"
              render={({ field }) => (
                <FormItem>
                  <label>Hair Color</label>
                  <FormControl>
                    <Input placeholder="Natural Black" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="hairLength"
              render={({ field }) => (
                <FormItem>
                  <label>Hair Length (inches)</label>
                  <FormControl>
                    <Input type="number" placeholder="18" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <label>Product Image</label>
              <FormControl>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-32 cursor-pointer hover:border-primary"
                  >
                    {imagePreview ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={imagePreview || "/placeholder.svg"}
                          alt="Preview"
                          fill
                          className="object-contain p-2"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute top-1 right-1 h-6 w-6 rounded-full bg-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            clearImage()
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-muted-foreground">
                        <Upload className="h-8 w-8 mb-2" />
                        <span>Upload image</span>
                      </div>
                    )}
                  </label>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </FormControl>
              <FormDescription>Upload a clear image of the product.</FormDescription>
              <FormMessage />
            </FormItem>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit"> {isLoading ? "submitting" : "Submit"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

