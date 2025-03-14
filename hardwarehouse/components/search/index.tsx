'use client'
import { Search as Icon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
export default function Search() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [term, setTerm] = useState<string | ''>(searchParams.get('query') || '');

    const handleSearch = (query: string) => {
        if(!query) return;

        const params = new URLSearchParams();
        params.set('query', query);

        router.push(`/search?${params.toString()}`);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(term);
    }

    return (
        <form action="/" className="hidden md:flex w-full rounded-full bg-white border border-black px-3 py-1" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Buscar"
            className="w-full text-black focus:outline-none focus:ring-0 caret-black" 
            onChange={(e) => setTerm(e.target.value)}
            />
            <button type="submit" className="">
                <Icon className="size-[25px] text-black/50"/>
            </button>
        </form>
        
    )
}