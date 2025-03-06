'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Produto } from "@/types/home/home";
import ProductCard from "@/components/product-card";

interface CarrosselProps { // existe pra desempacotar {{ xx }} os produtos e pegar as propriedades ali de cima
    produtos: Produto[];
    autoSlide?: boolean;
    intervalo?: number
}


export default function Carrossel({ produtos, autoSlide = false, intervalo = 1000 } : CarrosselProps) {
  const [atual, setAtual] = useState(0);

  const [itensPorSlide, setItensPorSlide] = useState(1);
  
  useEffect(() => {
    const atualizarTamanho = () => {
      setAtual(0);
      if (window.innerWidth >= 768) {
        setItensPorSlide(3); 
      } else {
        setItensPorSlide(1); 
      }
    };
    
    atualizarTamanho(); 
    window.addEventListener("resize", atualizarTamanho);
  }, []);
  
  const totalSlides = Math.ceil(produtos.length / itensPorSlide);
  const anterior = () => setAtual((prev) => (prev === 0 ? Math.ceil(produtos.length/itensPorSlide) - 1 : prev - 1));
  const proximo = () => setAtual((prev) => (prev === Math.ceil(produtos.length/itensPorSlide) - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(proximo, intervalo);
    return () => clearInterval(slideInterval);
  }, [atual]);

  return (
    <div className="flex flex-col items-center justify-center text-center overflow-hidden size-4/6 ">
      <div
        className="flex w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${atual * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div key={index} className="flex w-full flex-shrink-0 gap-10 justify-around">
            {produtos.slice(index * itensPorSlide, index * itensPorSlide + itensPorSlide).map((produto) => (
              <ProductCard key={produto.id} {...produto} />
              
            ))}
          </div>
        ))}
      </div>
      
        {/* botoes */}
        <button onClick={anterior} className="mx-4 md:ml-8 mb-8 absolute left-0 p-2 rounded-full bg-white border-2 border-[#e9e9e9] shadow-lg
        hover:bg-black/30">
          <ChevronLeft size={32} />
        </button>
        <button onClick={proximo} className="mx-4 md:mr-8 mb-8 absolute right-0 p-2 rounded-full bg-white border-2 border-[#e9e9e9] shadow-lg
        hover:bg-black/30">
          <ChevronRight size={32} />
        </button>

        {/* indicadores */}
        <div className="flex justify-center gap-2 my-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                atual === index ? "bg-black/80 scale-125" : "bg-black/40"
              }`}
            ></div>
          ))}
        </div>
    </div>
  );
}
