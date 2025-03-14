import prisma from "@/lib/db";

const itemsPerPage = 8;

export async function getFilteredProds(query: string, curr: number) {

    const prods = await prisma.produto.findMany({
        where: {
            OR: [{name: { contains:query, mode: 'insensitive' }},
            ],
        },
        // include: {
            
        // }
        orderBy: {
            preco: 'asc'
        },
        take: itemsPerPage
    })
    const count = await prisma.produto.count({
        where: {
            OR: [{name: { contains:query, mode: 'insensitive' }}]
        },
    })
    return { prods, count }
}
export async function getFilteredOrderById(query: string, curr: number) {

    const prods = await prisma.produto.findMany({
        where: {
            OR: [{name: { contains:query, mode: 'insensitive' }},
            ],
        },
        // include: {
            
        // }
        orderBy: {
            id: 'asc'
        },
        take: itemsPerPage
    })
    const count = await prisma.produto.count({
        where: {
            OR: [{name: { contains:query, mode: 'insensitive' }}]
        },
    })
    return { prods, count }
}
