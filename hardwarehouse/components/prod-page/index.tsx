'use client'
import { useState } from "react"
import Image from "next/image"
import { ChevronRight, Minus, Plus } from "lucide-react"
import Link from "next/link";
import ProductCard from "../product-card"
import { CATEGORIAS_EXIBICAO, ProdutoIndividual, Produto } from "@/types/home/home";

export default function ProductPage({ produto, produtos }: {produto: ProdutoIndividual, produtos: Produto[]}) {

    if(!produto) return null;

    const [qnt, setQnt] = useState(1);

    const decrementar = () => {
        setQnt((prevQnt) => Math.max(1, prevQnt - 1));
    };

    const incrementar = () => {
        setQnt((prevQnt) => Math.max(1, prevQnt + 1));
    };

    return (
        <div id="wrapper" className="flex flex-col size-full gap-3">
            <div id='path' className="flex font-semibold text-xs md:text-sm items-center text-black/75 md:pt-2 md:pb-5">
                <a href="/products" className="hover:underline">{CATEGORIAS_EXIBICAO[produto.categoria as keyof typeof CATEGORIAS_EXIBICAO]}</a> <ChevronRight size={18}/> <p className="text-[#282BF3]">{produto?.name}</p>
                {/* TODO ^^ deixar dinamico */}
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div id='img' className="w-3/5 md:pl-10">
                    <Image
                        src={produto?.image}
                        alt={produto?.name}
                        width={1920}
                        height={1080}
                        className="py-5 size-full"
                    />
                </div>
                <div id='info' className="flex flex-col md:w-full gap-1 md:justify-center md:items-center">
                    <h1 id="nome" className="text-lg md:text-2xl font-semibold">{produto?.name}</h1>
                    <h1 id="preco" className="font-bold text-lg md:text-2xl text-[#17948F]">R$ {produto?.preco.toFixed(2)}</h1>
                    <p id="descricao" className="w-1/3 text-[#848484] md:text-lg">{produto?.descricao}</p>
                    <div id="comprar" className="flex w-full justify-center gap-3 items-center mt-4 ALTEREME">
                        <div className="flex w-1/3 md:w-fit px-4 py-2 gap-3 border-2 border-[#EA8006] text-center rounded-[6px] ">
                            <button className="" onClick={() => {decrementar()}}>
                                <Minus size={24} />
                            </button>
                            <p className="w-8 text-center">{qnt}</p>
                            <button className="" onClick={() => {incrementar()}}>
                                <Plus size={24} />
                            </button>
                        </div>
                        <button className="flex items-center text-center justify-center w-1/3 md:w-fit px-6 py-3 gap-3 bg-[#1E8581] hover:bg-[#1E8581]/80 rounded-[6px]">
                            <Image
                                src={'/assets/carrinho.png'}
                                alt="Comprar"
                                width={1920}
                                height={1080}
                                className="size-4"
                                />
                            <p className="hidden md:block text-white" onClick={() => alert(`Comprado por R$${(produto.preco * qnt).toFixed(2)}!`)}>Comprar</p>
                        </button>
                    </div>
                </div>
            </div>

            <div id="divisor" className="w-full border-b border-black/20"></div>

            <h1 className="font-semibold">Outros produtos</h1>
            <div id="more-products" className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-3 md:gap-y-5 justify-items-center overflow-x-auto py-4">
                {/* TODO! */}
                {produtos.map((produto) => (
                    <ProductCard key={produto.id} produto={produto} />
                ))}
            </div>
            <div id='ver-mais' className="w-full flex justify-center mt-4 mb-4">
                <Link href="/products" className="bg-[#1E8581] hover:bg-[#1E8581]/80 text-white py-2 px-4 rounded-[6px]">
                    Outros
                </Link>
            </div>
        </div>
        
    )
}