'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
    {href: '/products', label: 'Produtos'},
    {href:'/gpus', label: 'GPUs'},
    {href:'/cpus', label: 'CPUs'},
    {href:'/cases', label: 'Gabinetes'},
    {href:'/memories', label: 'Memórias'},
]

export default function Header() {
    const [visibleLinks, setVisibleLinks] = useState(links);
    const mobile = ["Produtos", "Gabinetes", "Memórias"]

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleLinks(links.filter(
                    (link) => mobile.includes(link.label)
                )); // Exibe apenas os três primeiros
            } else {
                setVisibleLinks(links);
            }
        };

        handleResize(); // Chama a função ao montar o componente
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header>
            <nav className="justify-center">
                <div className="flex bg-[#B3C9E2] items-center justify-around flex-wrap w-full ">
                    <Link href="/" className="">
                        <Image
                            src={'/assets/no_bg_black_logo.png'}
                            alt="Logo"
                            width={50}
                            height={50}
                            className="md:size-[80px]"/>
                    </Link>

                    <form action="/" className="flex w-1/2 rounded-[8px] bg-white border border-black px-3 py-1">
                        <input type="text"
                        placeholder="Buscar"
                        className="w-full text-black focus:outline-none focus:ring-0 caret-black" />
                        <button type="submit" className="">
                            <Image
                            src={'/assets/lupa.png'}
                            alt="Confirmar busca"
                            width={30}
                            height={30}
                            />
                        </button>

                    </form>
                    <div className="flex items-center justify-between gap-[10px] md:gap-[20px]">
                        <Link href="/manage" className="">
                            <Image
                            alt="Manager"
                            src={"/assets/manager.png"}
                            width={20}
                            height={20}
                            className="md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "/>
                        </Link>
                        <Link href="/contact" className="">
                            <Image
                            alt="Contatos"
                            src={"/assets/contact-mail.png"}
                            width={20}
                            height={20}
                            className="md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "/>
                        </Link>
                        <Link href="/user" className="">
                            <Image
                            alt=""
                            src={"/assets/user.png"}
                            width={20}
                            height={20}
                            className="md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "/>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full justify-around bg-[#F5F5F5] py-[4px]">
                    {visibleLinks.map((link, index) =>
                        <Link href={link.href} key={index} className="justify-between">
                            <span className="rounded-[8px] hover:bg-[#aaaaaa] hover:text-white hover:px-[2px] transition-all duration-300 easy-in-out">{link.label}</span>
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}