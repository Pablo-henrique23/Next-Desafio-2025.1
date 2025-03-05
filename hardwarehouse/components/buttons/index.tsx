'use client'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"


export function NewBut(){
    return (
        <Link href={'/admin/manage/create'} 
        className='flex font-semibold w-full bg-[#DEDEDE] justify-center rounded-[10px] items-center text-center px-2 py-1 gap-2 md:px-6 md:py-2 hover:scale-105 transition-all duration-200'>
            <Image
                src={'/assets/plus.png'} /* teclado.jpg */
                alt="Novo produto"
                width={1920}
                height={1080}
                className="size-4 md:size-7"
                />
            Novo
        </Link>
    )
}
export function EditBut({ id }: { id:number }){
    return (
    <Link href={`/admin/manage/edit/${id}`} className='hover:scale-110 transition-all duration-200'> 
    {/* TODO */}
        <Image
            src={'/assets/edit.png'}
            alt="Editar"
            width={1920}
            height={1080}
            className="size-5 md:size-7"
        />
    </Link>
    )
}

export function ViewBut({ id }: { id:number }){
    return (
        <Link href={`/admin/manage/view/${id}`} className='hover:scale-110 transition-all duration-200'> 
        {/* TODO */}
            <Image
                src={'/assets/view.png'}
                alt="Visualizar"
                width={1920}
                height={1080}
                className="size-5 md:size-7"
            />
        </Link>
    )
}

export function DeleteBut({ id }: { id:number }){
    return (
        <Link href={`/admin/manage/delete/${id}`} className='hover:scale-110 transition-all duration-200'> 
        {/* TODO */}
            <Image
                src={'/assets/delete.png'}
                alt="Deletar"
                width={1920}
                height={1080}
                className="size-5 md:size-7"
            />
        </Link>
    )
}

export function ImageInputBut({msg, obrigatorio}: {msg: string, obrigatorio:boolean}) {
    const [fileName, setFileName] = useState<string>(msg);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || event.target.files.length === 0) return;

        const file = event.target.files[0]; 
        if (file) {
            setFileName(file.name); 
        } else {
            setFileName(msg);
        }
    };

    return (
        <div className="size-full flex justify-center">
            <label htmlFor="img-input" className='flex items-center justify-center gap-3 w-fit cursor-pointer rounded-[10px] px-3 py-2 bg-[#E9E9E9] hover:bg-[#E1E0E0]'>
                <Image
                    src={'/assets/upload.png'}
                    alt="Adicionar ou alterar imagem"
                    width={1920}
                    height={1080}
                    className="size-7"
                />
                {fileName}
            </label>
            <input required={obrigatorio} type="file" name="imagem" id="img-input" className='hidden ' onChange={handleFileChange}/>
        </div>
    )
}

export function ConfirmButton({ fundo, fundoHover }: {fundo: string, fundoHover: string}) {
    return (
        <button type='submit' className={`w-full bg-${fundo} text-white p-3 rounded-[10px] hover:bg-${fundoHover}`}>
            Confirmar
        </button>
    )
}
export function BackButton({ fundo, fundoHover, url }: {fundo: string, fundoHover: string, url:string}) {
    return (
        <Link href={url} 
        className={`w-full bg-${fundo} text-white p-3 rounded-[10px] hover:bg-${fundoHover} md:px-5`}>
            Voltar
        </Link>
    )
}

export function ExitBut(){
    return (
        <Link href={'/admin'}>
            <Image
                src={'/assets/close.png'}
                alt="Imagem de fundo"
                width={1920}
                height={1080}
                className="size-7"
                />
        </Link>
    )
}