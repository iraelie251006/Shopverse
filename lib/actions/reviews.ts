"use server";

import { revalidateTag } from "next/cache";

import { prisma } from "@/lib/prisma";

interface createReviewProps {
    rating: number;
    content: string;
    name: string;
    productId: number;
}

export const createReview = async (input: createReviewProps) => {
    try {
       const newReview = await prisma.review.create({
        data: {
            name: input.name,
            content: input.content,
            rating: input.rating,
            product: {
                connect: { id: input.productId },
            },
        }
    }) 
    revalidateTag("Product");
    return newReview;
    } catch (error) {
        console.error("Error creating review:", error);
        return false
    }
}