import ProductCard from "@/components/product-card"

export default function ProductPage() {
    return (
        <div id="general-wrapper" className="my-2 md:my-4 flex flex-col md:flex-row md:justify-around md:gap-4">
            <div id="categorias" className="flex flex-col justify-left text-center w-full md:w-1/2 md:mt-4">
                <p className="font-bold text-lg text-black/80">CATEGORIAS</p>
                <ul className="flex flex-wrap flex-row mx-4 mt-2 justify-left md:mx-0 md:flex-col md:gap-1">
                    {[
                        "GPUs",
                        "CPUs",
                        "Coolers",
                        "SSDs",
                        "HDDs",
                        "Gabinetes",
                        "Placas Mãe",
                        "Memórias RAM",
                    ].map((categoria, index) => (
                    <li key={index} className="flex space-x-2 items-center text-center">
                        <input
                            type="checkbox"
                            className="ml-3 w-5 h-5 justify-center items-center text-center rounded border-gray-400 focus:ring-2 focus:ring-blue-500"
                        />
                        <label className="text-black text-[18px]">{categoria}</label>
                    </li>
                ))}
                </ul>
            </div>
            <div className="mx-auto border-t mt-4 w-72 md:mx-0 md:w-0 md:h-auto md:border-l border-[#747474]"></div>
            <div className="flex flex-col md:flex-row mt-4 gap-6 w-full justify-center items-center text-center ">
                <ProductCard nome='NVIDIA RTX 4070' desc="GPU boa demais uai, ruim é o preço" preco={9999.99} imagem="/assets/rtx4070.png"/>
                <ProductCard nome='NVIDIA RTX 4070' desc="GPU boa demais uai, ruim é o preço" preco={9999.99} imagem="/assets/rtx4070.png"/>
                <ProductCard nome='NVIDIA RTX 4070' desc="GPU boa demais uai, ruim é o preço" preco={9999.99} imagem="/assets/rtx4070.png"/>
                <ProductCard nome='NVIDIA RTX 4070' desc="GPU boa demais uai, ruim é o preço" preco={9999.99} imagem="/assets/rtx4070.png"/>
            </div>
        </div>
    )
}