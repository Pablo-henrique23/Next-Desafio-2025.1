import { getFilteredProds } from "@/actions/search/actions";
import SearchPage from "@/components/search-page";

export default async function Page(
    { searchParams }:
    { searchParams: { query?: string, page?: string } })
{
    const p = await searchParams
    const query = p?.query || '';
    const curPage = Number(p?.page) || 1;
    
    const { prods, count } = await getFilteredProds(query, curPage)

    return (
        <div>
            <SearchPage prods={prods} count={count}/>
        </div>
    )
}