'use client'
import { Search } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function AdminSearch(){

    const searchParams = useSearchParams();
    const router = useRouter();
    const [secTerm, setSecTerm] = useState<string | ''>(searchParams.get('query') || '');

    const handleSearch = (query: string) => {
        if(!query) return;

        const params = new URLSearchParams();
        params.set('query', query);

        router.push(`/admin?${params.toString()}`);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(secTerm);
    }

    useEffect(() => {
        setSecTerm(searchParams.get('query') || '')
    }, [searchParams]);

    return(
        <form action="" className="hidden md:flex w-full" id="search" autoComplete="off" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full gap-2 py-2">
                <div className="flex relative items-center justify-center w-full">
                    <Search className="size-7 text-black/50 absolute right-10"/>
                    <input
                        type="text" 
                        name="query" 
                        id="search-input" 
                        className="flex border border-black w-full mx-[20px] items-center justify-center py-2 px-4 border-2 border-gray-300 rounded-full"
                        placeholder="Buscar"
                        value={secTerm}
                        onChange={(e) => setSecTerm(e.target.value)}
                    />
                </div>
            </div>
        </form>
    )
}