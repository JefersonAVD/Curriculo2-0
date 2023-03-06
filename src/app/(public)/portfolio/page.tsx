import PagePortfolio from "@/components/routes/portfolio";
import getCollections from "@/utils/prisma";

export default async function Portfolio() {
    const data = await getCollections(['portfolio'])
    return <PagePortfolio data={data} />
}