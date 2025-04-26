"use server"

import { Product } from "@prisma/client";

import { prisma } from "@/lib/prisma";

interface createProductProps {
    name: string,
    description: string,
    price: number,
    category: string,
    images?: string[]
}

export const createProduct = async (input: createProductProps) => {
    try {
       const newProduct = await prisma.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          category: input.category,
          images: {
            create: input.images?.map((url) => ({ url })),
          }
        },
      })

      return newProduct; 
    } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create product");
    }
}

export const getProductById = async (id: number) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id },
            include: { images: true, reviews: true },
        });
        return product;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export const updateProduct = async (id: number, data: Partial<Product> & { images: string[]}) => {
    try {
        const updateData: any = {
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category,
        };

        if (data.images) {
            updateData.images = {
                deleteMany: {},
                create: data.images?.map((url) => ({ url })),
            };
        }
        const updatedProduct = await prisma.product.update({
            where: { id },
            data: updateData,
        });
        return updatedProduct;
    } catch (error) {
        console.error("Error updating product:", error);
        return null;
    }
}