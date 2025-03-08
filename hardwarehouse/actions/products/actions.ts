'use server'

import prisma from "@/lib/db"
export async function getProdutos(){
    const products = await prisma.produto.findMany()
    return products;
}
