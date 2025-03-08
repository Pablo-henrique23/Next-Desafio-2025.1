'use client'
import Image from "next/image"
import { ChevronRight, X } from "lucide-react"
import ProductCard from "../product-card"
import { CATEGORIAS_EXIBICAO } from "@/types/home/home";
import { getById } from "@/actions/home/actions";
import { Produto } from "@/types/home/home";
import { useState, useEffect } from "react";

export default function ProductPage({ id }: {id: number}) {

    const [produto, setProduto] = useState<Produto | null >(null);
    useEffect(() => {
        async function getProd(){
            const data = await getById(id);
            setProduto(data);
        }
        if(id) getProd();
    }, [id])
    
    if(!produto) return null;

    return (
        <div id="wrapper" className="flex flex-col size-full gap-3">
            <div id='path' className="flex font-semibold text-xs md:text-sm items-center text-black/75 md:pt-2 md:pb-5">
                <a href="/products" className="hover:underline">{CATEGORIAS_EXIBICAO[produto.categoria[0] as keyof typeof CATEGORIAS_EXIBICAO]}</a> <ChevronRight size={18}/> <p className="text-[#282BF3]">{produto?.name}</p>
                {/* TODO ^^ deixar dinamico */}
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div id='img' className="md:pl-10">
                    <Image
                        src={produto?.image}
                        alt={produto?.name}
                        width={1920}
                        height={1080}
                        className="size-full md:w-full"
                    />
                </div>
                <div id='info' className="flex flex-col md:w-full gap-1 md:justify-center md:items-center">
                    <h1 id="nome" className="text-lg md:text-2xl font-semibold">{produto?.name}</h1>
                    <h1 id="preco" className="font-bold text-lg md:text-2xl text-[#17948F]">R$ {produto?.preco.toFixed(2)}</h1>
                    <p id="descricao" className="text-[#848484] md:text-lg">{produto?.descricao}</p>
                    <div id="comprar" className="flex w-full justify-center gap-3 items-center mt-4 ALTEREME">
                        <div className="w-1/3 md:w-fit border border-black text-center">
                            Quantidade
                            {/* TODO fazer controlador de quantidade */}
                        </div>
                        <button onClick={() => alert("Comprado com sucesso")} className="flex items-center text-center justify-center w-1/3 md:w-fit px-6 py-2 gap-3 bg-[#1E8581] hover:bg-[#1E8581]/80 rounded-[6px]">
                            <Image
                                src={'/assets/carrinho.png'}
                                alt="Comprar"
                                width={1920}
                                height={1080}
                                className="size-4"
                                />
                            <p className="hidden md:block text-white">Comprar</p>
                        </button>
                    </div>
                </div>
            </div>

            <div id="divisor" className="w-full border-b border-black/20"></div>

            <h1 className="font-semibold">Outros produtos</h1>
            <div id="more-products" className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-3 md:gap-y-5 justify-items-center overflow-x-auto">
                {/* TODO! */}
                <ProductCard produto={produto} />
                <ProductCard produto={produto} />
                <ProductCard produto={produto} />
                <ProductCard produto={produto} />
                <ProductCard produto={produto} />
                <ProductCard produto={produto} />
            </div>
        </div>
        
    )
}