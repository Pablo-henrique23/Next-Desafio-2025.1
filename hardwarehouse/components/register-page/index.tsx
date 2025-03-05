export default function RegisterPage() {
    return (
        <div id="main-wrapper" className="flex flex-col md:w-1/2 my-11 items-center bg-[#F0F0f0] shadow-[0px_0px_10px_10px_rgba(0,0,0,0.2)] gap-4 rounded-[30px]">
            <form action="" className="flex flex-col w-3/4 text-center">
                {/* TODO */}
                <h1 className="w-full text-center font-bold text-2xl my-6">Registre-se</h1>

                <label htmlFor="email" className="font-semibold mt-2 mx-4 md:mx-0">Email</label>
                <input autoComplete="on" type="email" name="Email" id="email" className="text-center mx-4 md:mx-0 px-2 mt-1 py-2 rounded-[8px] bg-[#E1E0E0] border border-black" />
                
                <label htmlFor="password" className="font-semibold mt-10 mx-4 md:mx-0">Senha</label>
                <input autoComplete="off" type="password" name="password" id="password" className="text-center mx-4 md:mx-0 px-2 mt-1 py-2 rounded-[8px] bg-[#E1E0E0] border border-black" />

                <label htmlFor="password-confirmation" className="font-semibold mt-10 mx-4 md:mx-0">Confirmar senha</label>
                <input autoComplete="off" type="password" name="password-confirmation" id="password-confirmation" className="text-center mx-4 md:mx-0 px-2 mt-1 py-2 rounded-[8px] bg-[#E1E0E0] border border-black" />
                
                <div className="flex flex-col w-full my-6 my-3 flex items-center gap-5 justify-center">
                    <button type="submit" className="w-1/3 md:w-1/5 rounded-[10px] py-2 bg-[#1E8581] font-semibold text-white hover:bg-[#1E8581]/80 transition-all duration-200">
                        Registrar
                    </button>
                    <a  href="/login" className="underline font-semibold text-black hover:scale-110 hover:text-black/80 transition-all duration-200">
                        Login
                    </a>
                </div>
            </form>
        </div>
    )
}