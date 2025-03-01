import Image from "next/image"
import ProductCard from "../product-card"
export default function HeroSection() {
    return (
    <div id="page" className="bg-[#E9E9E9]">
        <div className="flex w-full">
            <Image
                src={'/assets/teslaA100.jpg'} /* teclado.jpg */
                alt="Tesla A100"
                width={1920}
                height={1080}
                className=""
            />
        </div>
        <div id="mvv" className="flex flex-col bg-[#E9E9E9] py-[15px] w-full h-auto justify-around md:flex-row gap-[20px] px-[20px] items-center">
            <div className="rounded-[10px] bg-[#9FA5AB] py-[10px] size-10/12 transition-all justify-center duration-100 md:h-46 md:size-[210px] hover:md:w-[240px]">
                <div id="missao-title" className="flex justify-center">
                    <p className="font-semibold">
                        Missão
                    </p>
                </div>
                <div className="flex justify-center text-center items-center ">
                    <p className="mx-[10px]">
                    Nossa missão é 
                    oferecer os melhores
                    hardwares pelo
                    melhor preço! A melhor
                    qualidade para os
                    melhor clientes!
                    </p>
                </div>
            </div>
            <div className="rounded-[10px] bg-[#9FA5AB] py-[10px] size-10/12 transition-all justify-center duration-100 md:h-46 md:size-[210px] hover:md:w-[240px]">
                <div id="visao-title" className="flex justify-center">
                    <p className="font-semibold">
                        Visão
                    </p>
                </div>
                <div className="flex justify-center text-center items-center">
                    <p className="mx-[10px]">
                    Nossa visão de
                    mundo nos diz que todos
                    devem ter acesso à
                    tecnologia de ponta, seja para
                    trabalho ou jogos!
                    </p>
                </div>
            </div>
            <div className="rounded-[10px] bg-[#9FA5AB] py-[10px] size-10/12 transition-all justify-center duration-100 md:h-46 md:size-[210px] hover:md:w-[240px]">
                <div id="valores-title" className="flex justify-center">
                    <p className="font-semibold">
                        Valores
                    </p>
                </div>
                <div className="flex justify-center text-center items-center">
                    <p className="mx-[10px]">
                    Acreditamos na
                    igualdade, evolução
                    e educação através
                    da tecnologia, dos jogos
                    e do trabalho e é por isso que 
                    você precisa de um PC!
                    </p>
                </div>
            </div>
        </div>
        <div className="flex flex-col mx-8 py-[15px]">
            <p className="font-semibold">Produtos em alta: </p>
            <span className="h-[1px] bg-[#9FA5AB]"></span>
        </div>
        <div id="row" className="flex justify-around pb-4 md:justify-center md:gap-40">
            <ProductCard nome="RTX 4070" preco={9999.99} imagem="/assets/rtx4070.png" desc="Descrição descrição descrição "/>
            <ProductCard nome="RTX 4070" preco={9999.99} imagem="/assets/rtx4070.png" desc="Descrição descrição descrição "/>
        </div>
        
    </div>
    )
}