import { getFilteredOrderById } from "@/actions/search/actions";

import ProdManagementPage from "@/components/prod-management-page"

export default async function Page( { searchParams }: { searchParams: { query?: string, page?: string } }){
    const params = await searchParams;
    const query = params?.query || '';
    const curPage = Number(params?.page) || 1;

    const { prods, count } = await getFilteredOrderById(query, curPage)

    return (
        <div id="general-wrapper" className="flex size-full bg-white md:bg-[#E9E9E9] justify-center m-30">
            <ProdManagementPage prods={prods} count={count}/>
        </div>
    )
}