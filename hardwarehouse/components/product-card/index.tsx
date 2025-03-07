import Image from "next/image"
import Link from "next/link"
import { Produto } from "@/types/home/home"

export default function ProductCard({produto}: {produto: Produto}) {

    const imgProd = produto.image || '/assets/close.png'
    return (
        <Link
            href={`/product/${produto.id}`}
            // TODO
            className="flex text-center pb-2 justify-center border-2 border-[#E9E9E9] w-40 md:w-52 xl:w-96
            items-center md:shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
            <div id="product-container" className="flex flex-col items-center">
                <Image
                    src={imgProd}
                    alt={produto.name}
                    width={1920}
                    height={1080}
                    className="size-full md:size-40 p-2 object-contain"
                />
                <p id="name" className="pt-4 font-semibold line-clamp-1 mx-5">
                    {produto.name}
                </p>
                <p id="preco" className="text-[#282BF3] font-semibold">
                    R$ {produto.preco.toFixed(2)}
                </p>
                <p id="descricao" className="text-[#848484] text-[14px] text-center line-clamp-1 mx-4 mb-3 mt-2">
                    {produto.descricao}
                </p>
                <button id="comprar" 
                className="flex py-2 px-2 md:px-4 gap-2 items-center justify-center text-white rounded-lg bg-[#1E8581] mx-auto
                hover:bg-[#1E8581]/80 transition-all duration-200">
                    <Image
                        src={'/assets/carrinho.png'}
                        alt="Carrinho"
                        width={1920}
                        height={1080}
                        className="size-5"
                    />
                    Ver mais
                </button>
            </div>
        </Link>
    )
}