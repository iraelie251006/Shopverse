"use server"

import { Prisma } from "@prisma/client"


interface createProductProps {
    name: string,
    description: string,
    price: number,
    category: string,
}

export const createProduct = async (input: createProductProps) => {
    const newProduct = await Prisma.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
        },
      })
}