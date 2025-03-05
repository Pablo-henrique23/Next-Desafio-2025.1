import { Search as Icon } from "lucide-react";

export default function Search() {
    return (
        <form action="/" className="hidden md:flex w-full rounded-full bg-white border border-black px-3 py-1">
            <input type="text"
            placeholder="Buscar"
            className="w-full text-black focus:outline-none focus:ring-0 caret-black" />
            <button type="submit" className="">
                <Icon className="size-[25px] text-black/50"/>
            </button>
        </form>
        
    )
}