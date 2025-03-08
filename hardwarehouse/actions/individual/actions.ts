'use server'

import prisma from "@/lib/db"

export async function getById(id: number){
    const product = await prisma.produto.findUnique({
        where: {
            id: id
        }
    })
    return product;
}
