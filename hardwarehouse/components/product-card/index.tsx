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
        <div id="product-container" className="text-center size-1/3 md:size-1/6 py-2 md:border md:border-[#848484]">
            <Link
                href="/"
                className=""
            >
                    <Image
                        src={imagem}
                        alt={nome}
                        width={1920}
                        height={1080}
                        className="size-full py"
                    />
                <p id="nome" className="pt-4 font-semibold">
                    {nome}
                </p>
                <p id="preco" className="text-[#282BF3] font-semibold">
                    R$ {preco}
                </p>
                <p id="descricao" className="flex text-[#848484] text-[14px] pb-2 items-center text-center justify-center">
                    {desc}
                </p>
                <button id="comprar" className="flex py-2 px-2 gap-2 items-center justify-center text-white rounded-lg bg-[#1E8581] mx-auto">
                    <Image
                        src={'/assets/carrinho.png'}
                        alt="Carrinho"
                        width={1920}
                        height={1080}
                        className="size-5"
                    />
                    Comprar
                </button>
            </Link>
        </div>
    )
}