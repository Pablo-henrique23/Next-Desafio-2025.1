import { getFilteredProds } from "@/actions/search/actions";
import SearchPage from "@/components/search-page";

export default async function Page(
    { searchParams }:
    { searchParams: { query?: string, page?: string } })
{
    const query = searchParams?.query || '';
    const curPage = Number(searchParams?.page) || 1;
    
    const { prods, count } = await getFilteredProds(query, curPage)

    return (
        <div>
            <SearchPage prods={prods} count={count}/>
        </div>
    )
}