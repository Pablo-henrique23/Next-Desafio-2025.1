import SecondaySearch from './secondary-search';
import ProductCard from '../product-card';
export default function SearchPage(){
    const count = 0;

    return (
        <div>
            <SecondaySearch count={count}/>
            {count != 0 ? (
                <div className="w-full flex mx-[10px]">
                    <span>
                        Nenhum item encontrado.
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