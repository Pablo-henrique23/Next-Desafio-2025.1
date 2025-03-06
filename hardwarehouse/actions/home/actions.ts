'use server'

import prisma from "@/lib/db"

export async function getEmAlta(){
    const products = await prisma.produto.findMany({
        select: {
            id: true,
            name: true,
            preco: true,
            image: true,
            descricao: true
        },
        where: {
            em_alta: true
        }
    })
    return products;
}

export async function getProdutos(){
    const products = await prisma.produto.findMany({
        select: {
            id:true,
            name:true,
            preco:true,
            descricao:true,
            image:true,
        }
    })
    return products;
}