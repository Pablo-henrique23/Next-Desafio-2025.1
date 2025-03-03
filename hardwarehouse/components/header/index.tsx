'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const links = [
    {href: '/', label: 'Home'},
    {href: '/products', label: 'Produtos'},
    {href: '/contact', label: 'Contato'},
    {href: '/login', label: 'Login'},

]

export default function Header() {
    const [visibleLinks, setVisibleLinks] = useState(links);
    const mobile = ["Home", "Produtos", "Login"]

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
            <nav className="justify-center text-center items-center">
                <div className="flex bg-[#B3C9E2] items-center justify-around flex-wrap w-full ">
                    <Link href="/" className="">
                        <Image
                            src={'/assets/no_bg_black_logo.png'}
                            alt="Logo"
                            width={1920}
                            height={1080}
                            className="md:ml-14 size-[50px] md:size-[80px]"
                        />
                    </Link>

                    <form action="/" className="flex w-1/2 rounded-full bg-white border border-black px-3 py-1">
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
                    <div className="flex items-center text-center md:mr-14 md:w-36 justify-around gap-2 md:gap-6">
                        <Link href="/contact" className="">
                            <Image
                                alt="Contatos"
                                src={"/assets/contact-mail.png"}
                                width={1920}
                                height={1080}
                                className="size-[25px] md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "
                            />
                        </Link>
                        <Link href="/admin" className="">
                            <Image
                                alt="Manager"
                                src={"/assets/manager.png"}
                                width={20}
                                height={20}
                                className="size-[25px] md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "
                            />
                        </Link>
                        <Link href="/user" className="">
                            <Image
                                alt=""
                                src={"/assets/user.png"}
                                width={1920}
                                height={1080}
                                className="hidden md:flex md:size-[30px] hover:bg-[#f1f1f1] hover:rounded-[10px] hover:p-1 transition-all duration-300 easy-in-out "
                            />
                        </Link>
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