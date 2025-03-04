'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Search from '@/components/search'

const links = [
    {href: '/', label: 'Home'},
    {href: '/products', label: 'Produtos'},
    {href: '/contact', label: 'Contato'},
    {href: '/search', label: 'Buscar'},

]

interface HeaderProps {
    SEARCH_BAR_VISIBLE?: boolean
}

export default function Header({ SEARCH_BAR_VISIBLE }: HeaderProps) {
    const [visibleLinks, setVisibleLinks] = useState(links);
    const mobile = ["Home", "Produtos", "Buscar"]

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
            <nav className="w-full justify-center items-center text-center">
                <div className="bg-[#B3C9E2] justify-center items-center text-center">
                    <div className="flex justify-around items-center text-center flex-wrap w-full ">
                        <div className="flex items-center text-center w-1/2 md:w-1/4 justify-around md:justify-between gap-2 md:gap-10"> 
                            <Link href="/" className="mx-auto">
                                <Image
                                    src={'/assets/no_bg_black_logo.png'}
                                    alt="Logo"
                                    width={1920}
                                    height={1080}
                                    className="size-[50px] md:size-[80px]"
                                    />
                            </Link>
                            <Link href="/admin" className="mx-auto md:mr-52">
                                <Image
                                    alt="Manager"
                                    src={"/assets/manager.png"}
                                    width={1920}
                                    height={1920}
                                    className="size-[25px] md:mb-2 md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "
                                    />
                            </Link>
                        </div>
                        {SEARCH_BAR_VISIBLE ? (
                            <Search />
                        ) : (
                            <p className="hidden md:flex text-xl">Olá, Admin</p>
                        )}
                        <div className="flex items-center text-center w-1/2 md:w-1/4 justify-around md:justify-between gap-2 md:gap-10">
                            <Link href="/contact" className="mx-auto md:ml-52">
                                <Image
                                    alt="Contatos"
                                    src={"/assets/contact-mail.png"}
                                    width={1920}
                                    height={1080}
                                    className="size-[25px] md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "
                                    />
                            </Link>
                            <Link href="/login" className="mx-auto">
                                <Image
                                    alt=""
                                    src={"/assets/user.png"}
                                    width={1920}
                                    height={1080}
                                    className="size-[25px] md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "
                                    />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-around items-center bg-[#dfdfdf] py-[4px]">
                    {visibleLinks.map((link, index) =>
                        <Link href={link.href} key={index} className="justify-between">
                            <span className="rounded-[8px] hover:bg-[#aaaaaa] hover:text-white hover:px-[6px] transition-all duration-300 easy-in-out">{link.label}</span>
                        </Link>
                    )}
                    
                </div>
            </nav>
        </header>
    )
}