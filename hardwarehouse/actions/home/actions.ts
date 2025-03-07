'use server'

import prisma from "@/lib/db"
import { tree } from "next/dist/build/templates/app-page";

export async function getEmAlta(){
    const products = await prisma.produto.findMany({
        select: {
            id: true,
            name: true,
            preco: true,
            image: true,
            descricao: true,
            em_alta:true
        },
        where: {
            em_alta: true
        }
    })
    return products;
}

export async function getProdutos(){
    const products = await prisma.produto.findMany()
    return products;
}

export async function getById(id: number){
    const product = await prisma.produto.findUnique({
        where: {
            id: id
        }
    })
    return product;
}

