'use client'
import { useState } from "react";
import { CATEGORIAS_EXIBICAO  } from "@/types/home/home";
import { Categoria } from "@prisma/client";

export function CategoriasEdit({ prod_categorias, onChange }: { prod_categorias: string, onChange?: (categoria: Categoria) => void }) {
    const categorias = Object.entries(CATEGORIAS_EXIBICAO);

    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(prod_categorias);

    return (
        <div className="size-full">
            <input required type="text" name="categoria" className="hidden" defaultValue={selected}/>
            <button type='button'
                id='categoria'
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-[#E9E9E9] text-black px-4 py-2 flex justify-between ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
            >
                <p className="mx-auto">{selected || 'Selecione uma categoria'}</p>
                <span className={`duration-300 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-auto opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="bg-white border rounded-lg shadow-md">
                {categorias.map(([key, categoria]) => (
                    <li
                    key={key}
                    className="bg-gray-50 px-4 py-2 border-b last:border-none last:rounded-b-lg hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                        setSelected(categoria);
                        setIsOpen(false);
                        onChange && onChange(key as Categoria);
                    }}
                    >
                    {categoria}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}
