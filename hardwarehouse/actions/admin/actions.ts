'use server'
import prisma from "@/lib/db"

export async function checkProd(id: number){
    const product = await prisma.produto.findUnique({
        where: {
            id: id
        }
    })
    return product ? true : false
}

export async function deleteProduct(id: number) {
    console.log(`excluindo id= ${id}`)
    await prisma.produto.delete({
        where: {
            id: id
        }
    })
}
