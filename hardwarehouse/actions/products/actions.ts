'use server'

import prisma from "@/lib/db"
import { Categoria } from '@prisma/client';
export async function getProdutos(){
    const products = await prisma.produto.findMany()
    return products;
}

export async function getByCategory(categorias: Categoria[]) {
    const products = await prisma.produto.findMany({
        where: {
            categoria: { in: categorias }
        }
    })
    return products;
}
