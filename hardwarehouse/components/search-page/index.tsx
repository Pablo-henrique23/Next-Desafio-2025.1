import SecondaySearch from './secondary-search';
import ProductCard from '../product-card';
export default function SearchPage(){
    const count = 0;

    return (
        <div>
            <SecondaySearch count={count}/>
            {count != 0 ? ( 
                // ===
                <div className="w-full flex flex-col mx-[10px]">
                    <span className='text-xl font-extrabold'>
                        Nenhum item encontrado.
                    </span>
                    <span className='text-black/70'>
                        Tente buscar por outro componente.
                    </span>
                </div>
            ): (
                <div className='w-full bg-black'>
                    <ProductCard/>
                </div>
            )}
        </div>
    )
}