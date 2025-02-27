type SecondarySearchP = {
    count: number,

}

export default function SecondarySearch({count}: SecondarySearchP){
    return(
        <form action="" className="" id="secondary-search" autoComplete="off">
            <div className="flex relative items-center justify-center w-full">
                <input type="text" name="sec-search-input" id="sec-search-input" className="flex border border-black w-full m-[20px] items-center justify-center py-2 px-4 border-2 border-gray-300 rounded-lg" placeholder="Pesquisar" />
                <button type="submit" className="absolute top-0 right-0 mt-2 mr-2 bg-yellow-400"></button>
            </div>
        </form>
    )
}