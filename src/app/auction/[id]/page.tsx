import { CreateOffer } from "~/components/forms/offer/create-offer";
import { api } from "~/trpc/server";

export default async function Page({ params }: { params: { id: string } }) {
  const auction = await api.auction.auctionById.query(params.id)
  const offers = await api.offer.getAllOffersForAuction.query(params.id)

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1>{auction?.title}</h1>
      <p>{auction?.description}</p>

      <CreateOffer auctionId={params.id}/>

      { offers?.map(offer => (
        <div key={offer.id}>
          <p>id: {offer.id}</p>
          <p>author id: {offer.authorId}</p>
          <p>title: {offer.title}</p>
          <p>description: {offer.description}</p>
        </div>
      ))}
    </main>
  )
}