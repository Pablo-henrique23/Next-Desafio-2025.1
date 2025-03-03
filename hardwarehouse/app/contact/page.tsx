export default function Page() {
    return (
        <div id="general-wrapper" className="flex flex-col items-center justify-center size-full border border-black py-5">
            <h1 className="text-black/75 font-bold text-2xl md:text-3xl">Fale conosco!</h1>
            <div id="container" className="w-3/4 md:w-1/2 bg-[#F0F0f0] my-5 px-4 pt-2 pb-4 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.2)] rounded-[15px]">
                <form action="" className="flex flex-col items-left gap-1">
                    <label htmlFor="name" className="flex text-left font-semibold pt-3 pb-2">Nome</label>
                    <input type="text" name="nome" id="nome" className="py-4 h-8 bg-[#E1E0E0] border border-black rounded-[8px] px-2" autoComplete="off"/>
                    
                    <label htmlFor="name" className="flex text-left font-semibold pt-3 pb-2">Email</label>
                    <input type="text" name="nome" id="nome" className="py-4 h-8 bg-[#E1E0E0] border border-black rounded-[8px] px-2" autoComplete="off"/>
                    
                    <label htmlFor="name" className="flex text-left font-semibold pt-3 pb-2">Assunto</label>
                    <input type="text" name="nome" id="nome" className="py-4 h-8 bg-[#E1E0E0] border border-black rounded-[8px] px-2" autoComplete="off"/>
                    
                    <label htmlFor="name" className="flex text-left font-semibold pt-3 pb-2">Mensagem</label>
                    <textarea name="mensagem" id="mensagem" className="h-24 bg-[#E1E0E0] border border-black rounded-[8px] px-2 py-1 resize-none" autoComplete="off" style={{ verticalAlign: 'top' }} />
                    
                    <div className="flex mt-3 justify-center w-full text-white font-semibold">
                        <button type="submit" className="rounded-[10px] py-2 w-24 bg-[#1E8581] hover:bg-[#1E8581]/80 transition-all duration-200">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}