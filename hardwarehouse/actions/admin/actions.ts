'use server'
import prisma from "@/lib/db"
import { Categoria } from "@prisma/client"

export async function checkProd(id: number){
    const product = await prisma.produto.findUnique({
        where: {
            id: id
        }
    })
    return product ? true : false
}

export async function createProduct(name: string, desc: string, preco: number, img: string, cat: Categoria){
    await prisma.produto.create({
        data: {
            name: name,
            descricao: desc,
            preco: preco,
            image: img,
            categoria: cat
        }
    })
}

export async function deleteProduct(id: number) {
    console.log(`excluindo id= ${id}`)
    await prisma.produto.delete({
        where: {
            id: id
        }
    })
}

export async function editProduct(id: number, name: string, desc: string, preco: number, img: string, cat: Categoria){
    await prisma.produto.update({
        where: {
            id: id
        },
        data: {
            name: name,
            descricao: desc,
            preco: preco,
            image: img,
            categoria: cat
        }
    })
}