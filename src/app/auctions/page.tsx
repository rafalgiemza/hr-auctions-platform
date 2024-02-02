import Link from "next/link";
import { CreateAuction } from "~/components/forms/auction/create-auction";
import { api } from "~/trpc/server";

export default async function Home() {
  const auctions = await api.auction.getAll.query();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">      
      <CreateAuction />

      <h1>auctions:</h1>
      {auctions.map(auction => 
        <Link key={auction.id} href={`auction/${auction?.id}`}>{auction?.title}</Link>
      )}

    </main>
  )
}