'use server'
import prisma from "@/lib/db"

export async function getRandomProdutos(exceptId: number, count:number){
    const products = await prisma.produto.findMany({
        where: {
            NOT: {
                id: exceptId
            }
        },
        orderBy: {
            preco: 'asc'
        },
        take: count
    })
    return products;
}