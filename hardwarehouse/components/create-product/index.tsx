'use client'

import React, { useState } from 'react'
import { ImageInputBut, ConfirmButton, ExitBut } from '@/components/buttons'
import { CATEGORIAS_EXIBICAO } from '@/types/home/home';
import { createProduct } from '@/actions/admin/actions';
import { Categoria } from '@prisma/client';

export default function CriarProduto() {
    const categorias = Object.entries(CATEGORIAS_EXIBICAO);
    const select = 'Selecione uma categoria';

    const [isOpen, setIsOpen] = useState(false)
    
    
    const [name, setName] = useState<string>();
    const [categoria, setCategoria] = useState<Categoria>()
    const [preco, setPreco] = useState<number>();
    const [desc, setDesc] = useState<string>();
    const [img, setImg] = useState<string>();

    const handleSubmit = async (e: React.FormEvent) => {
        if(!name || !categoria || !preco || !desc || !img){
            alert('Preencha todos os campos')
            return;
        }
        e.preventDefault();
        await createProduct(name, desc, preco, img, categoria);
        window.location.href = '/admin';
    }


    return (
        <div className="md:m-2 md:m-5 size-full justify-around p-3 md:rounded-[10px] bg-white">
            <div className='flex w-full mb-4 justify-between items-center text-center'>
                <div className='text-lg text-black/60 md:font-semibold'>
                    Novo Produto
                </div>
                <ExitBut/>
            </div>
            
            <div className='border-b border-black/60 my-2'></div>

            <div id="formulario">
                <form action="" onSubmit={handleSubmit} className='flex flex-col justify-around gap-2 font-semibold text-center'>
                    <label htmlFor="nome" className='flex justify-center gap-1'>Nome<p className='text-red-500'>*</p></label>
                    <input required id='nome' type="text" className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]'
                    autoComplete='off' onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="categoria" className='flex justify-center gap-1'>Categoria<p className='text-red-500'>*</p></label>
                    <div className="w-full">
                        {/* infelizmente nao da pra deixar isso em outro arquivo pelas validações */}
                        <input required type="hidden" name="categorias" className="hidden" value={categoria}/>
                        <button type='button'
                            id='categorias'
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-full bg-[#E9E9E9] text-black px-4 py-2 flex justify-between items-center ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
                        >
                            {categoria || select}
                            <span className={`duration-300 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-auto opacity-100" : "max-h-0 opacity-0"}`}>
                            <ul className="bg-white border rounded-lg shadow-md">
                            {categorias.map(([key, cat]) => (
                                <li
                                key={key}
                                className="bg-gray-50 px-4 py-2 border-b last:border-none last:rounded-b-lg hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setCategoria(key as Categoria);
                                    setIsOpen(false);
                                }}
                                >
                                {cat}
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    
                    <label htmlFor="preco" className='flex justify-center gap-1'>Preço<p className='text-red-500'>*</p></label>
                    <input required type="number" placeholder='R$' id="preco" name='preco'
                    className='px-4 py-2 rounded-lg text-center bg-[#E9E9E9]' step={0.01} min={0} onChange={(e) => setPreco(Number(e.target.value))}/>

                    <label htmlFor="descricao" className='flex justify-center gap-1'>Descrição<p className='text-red-500'>*</p></label>
                    <textarea required name="descricao" id="descricao" className='h-20 px-2 py-2 rounded-lg bg-[#E9E9E9] text-left resize-none'
                    onChange={(e) => setDesc(e.target.value)} autoComplete='off'/>

                    <div id='img-div' className='mt-4'>
                        <ImageInputBut msg='Adicionar imagem' obrigatorio onChange={setImg}/>
                    </div>

                    <div className='mx-auto mt-4 mb-2'>
                        <ConfirmButton fundo='[#1E8581]' fundoHover='[#1E8581]/80'/>
                    </div>
                </form>
            </div>
        </div>
    )
}