import Image from "next/image"
import Link from "next/link"

type produto = {
    nome: string
    preco: number
    imagem: string
    desc: string
}

export default function ProductCard({nome, preco, imagem, desc}: produto) {
    return (
        <Link
            href="/"
            // TODO
            className="flex text-center justify-center border-2 border-[#E9E9E9] w-40 md:w-96 items-center pb-2 mt-2 mx-3 md:shadow-lg rounded-lg md:mb-4 transition-all duration-300 hover:scale-105"
            >
            <div id="product-container" 
            className="">
                <Image
                    src={imagem}
                    alt={nome}
                    width={1920}
                    height={1080}
                    className="size-full md:size-40 mx-auto p-2"
                />
                <p id="nome" className="pt-4 font-semibold">
                    {nome}
                </p>
                <p id="preco" className="text-[#282BF3] font-semibold">
                    R$ {preco}
                </p>
                <p id="descricao" className="text-[#848484] text-[14px] text-center line-clamp-1 mx-2 mb-3 mt-2">
                    {desc}
                </p>
                <button id="comprar" 
                className="flex py-2 px-2 md:px-4 gap-2 items-center justify-center text-white rounded-lg bg-[#1E8581] mx-auto
                hover:bg-[#1E8581]/80">
                    <Image
                        src={'/assets/carrinho.png'}
                        alt="Carrinho"
                        width={1920}
                        height={1080}
                        className="size-5"
                    />
                    Comprar
                </button>
            </div>
        </Link>
    )
}