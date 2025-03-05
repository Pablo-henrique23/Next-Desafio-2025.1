'use client'
import { useState } from "react";

export function CategoriasEdit() {
    const categorias = ["GPUs", "CPUs", "Coolers", "SSDs", "HDDs", "Gabinetes", "Memória RAM"];

    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('Default')

    return (
        <div className="size-full">
            <input required type="text" name="categoria" className="hidden" defaultValue={selected}/>
            <button type='button'
                id='categoria'
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-[#E9E9E9] text-black px-4 py-2 flex justify-between items-center ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
            >
                {selected || 'Selecione uma categoria'}
                <span className={`duration-300 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-auto opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="bg-white border rounded-lg shadow-md">
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
    )
}
