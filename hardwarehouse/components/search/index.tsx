import { Search as Icon } from "lucide-react";

export default function Search() {
    return (
        <form className="flex basis-full" autoComplete="off">
            <div className="flex basis-full flex-col items-center gap-6 my-10">
                <div className="relative flex w-full items-center">
                    <Icon className="size-7 absolute text-white/50 left-3"/>
                    <input type="text" 
                        name="search" 
                        id="search" 
                        className="w-full rounded-xl px-16 py-6 text-white"
                        placeholder="Buscar"
                    />

                </div>
            </div>
        </form>
    )
}