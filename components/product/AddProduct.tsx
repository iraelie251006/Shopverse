"use client";

import ImageSelect from "./ImageSelect";

import { FormEvent, useState } from "react";
import { Image, Product, Review } from "@prisma/client";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createProduct, updateProduct } from "@/lib/actions/products";

export const revalidate = 1;

export interface ProductEditProps extends Product{
  id: number;
  reviews: Review[];
  images: Image[];
}
export default function AddProduct({
  edit,
  id,
  product,
}: {
  edit?: boolean;
  id?: string;
  product?: ProductEditProps;
}) {
  const title = edit ? "Edit Product " + id : "Add Product";
  const subText = edit
    ? "Update the details of your product here."
    : "Add a new product to your store.";
  const router = useRouter();

  const [images, setImages] = useState<string[]>(product?.images.map((image) => image.url) || []);
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || 0);
  const [description, setDescription] = useState(product?.description || "");
  const [category, setCategory] = useState(product?.category || "electronics");

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    try {
      if (edit && product) {
        const updatedProduct = await updateProduct(product.id, {
          name,
          description,
          price,
          category,
          images,
        });
          router.push(`/product/view/${updatedProduct?.id}`);
      } else {
        const newProduct = await createProduct({name, description, price, category, images})
        router.push(`/product/view/${newProduct?.id}`);
      }
      
    } catch (error) {
      console.error("Error creating product:", error);
    } 
  };

  return (
    <div className="grid min-h-screen w-full max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-24 gap-8">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-5">{subText}</p>
        </div>
        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Product Name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                onValueChange={(value) => setCategory(value)}
                defaultValue={category}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              id="price"
              type="number"
              placeholder="Price"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Describe your product"
              rows={5}
            />
          </div>
          <ImageSelect onChange={(value) => setImages(value)} />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
