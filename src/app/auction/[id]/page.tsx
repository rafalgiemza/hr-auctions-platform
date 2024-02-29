import { OfferList } from "~/components/auction/offer-list";
import { BreadCrumbs } from "~/components/main-layout/bread-crumbs";
import { api } from "~/trpc/server";
import { CreateBidBtn } from "./createBidBtn";
import { AuctionCard } from "./auction-card";

interface AuctionPagePros {
  params: { id: string };
}

export default async function AuctionPage({ params }: AuctionPagePros) {
  const auction = await api.auction.auctionById.query(params.id);
  const offers = await api.offer.getAllOffersForAuction.query(params.id);

  if (!auction) {
    return null;
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumbs items={["Auction"]} />
      <AuctionCard auction={auction} />
      <CreateBidBtn auctionId={auction.id} />
      <OfferList offers={offers} />
    </div>
  );
}
