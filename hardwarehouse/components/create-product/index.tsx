'use client'

import { useState } from 'react'
import Image from 'next/image'
export default function CriarProduto() {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('Selecione uma categoria')

    const categorias = ["GPUs", "CPUs", "Coolers", "SSDs", "HDDs", "Gabinetes", "Memória RAM"];

    return (
        <div className="m-2 md:m-5 size-full justify-around p-3 rounded-[10px] bg-white">
            <div className='flex w-full mb-4 justify-between items-center text-center'>
                <div className='text-lg text-black/60 md:font-semibold'>
                    Novo Produto
                </div>
                <Image
                    src={'/assets/close.png'}
                    alt="Imagem de fundo"
                    width={1920}
                    height={1080}
                    className="size-7"
                />
            </div>
            <div className='border-b border-black/60 my-2'></div>
            <div id="formulario">
                <form action="" className='flex flex-col justify-around gap-2 font-semibold text-center'>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>
                    <label htmlFor="categoria">Categoria</label>
                    <div className="w-full" id='categoria'>
                        <input type="hidden" name="categoria" value={selected} />
                        {/* Botão que abre/fecha */}
                        <button type='button'
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-full bg-[#E9E9E9] text-black px-4 py-2 flex justify-between items-center ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
                        >
                            {selected}
                            <span className={`duration-300 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
                        </button>

                        {/* Lista de categorias */}
                        <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-auto opacity-100" : "max-h-0 opacity-0"}`}>
                            <ul className="bg-white border shadow-md">
                            {categorias.map((categoria) => (
                                <li
                                key={categoria}
                                className="bg-gray-50 px-4 py-2 border-b last:border-none last:rounded-b-lg hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setSelected(categoria);
                                    setIsOpen(false);
                                }}
                                >
                                {categoria}
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    
                    <label htmlFor="preço">Preço</label>
                    <input type="number" placeholder='R$' className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>

                    <label htmlFor="descrição">Descrição</label>
                    <textarea name="descricao" id="descricao" className='h-20 px-2 py-2 rounded-lg bg-[#E9E9E9] text-left resize-none ' autoComplete='off'/>

                    <div id='img' className='mt-2'>
                        <label htmlFor="img"></label>
                        <input type="file" name="img" id="img" className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'/>
                    </div>

                    <button className='w-full bg-red-200 mt-4 mb-2' type='submit'>
                        Criar produto
                    </button>
                </form>
            </div>
        </div>
    )
}