import { OfferList } from "~/components/auction/offer-list";
import { CreateOffer } from "~/components/forms/offer/create-offer";
import { BreadCrumbs } from "~/components/main-layout/bread-crumbs";
import { ResponsiveDialog } from "~/components/shared/responsive-dialog";
import { api } from "~/trpc/server";
import { CreateBidBtn } from "./createBidBtn";

interface AuctionPagePros {
  params: { id: string };
}

export default async function AuctionPage({ params }: AuctionPagePros) {
  const auction = await api.auction.auctionById.query(params.id);
  const offers = await api.offer.getAllOffersForAuction.query(params.id);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumbs items={["Auction"]} />
      <p>{auction?.title}</p>
      <p> {auction?.description}</p>
      <p> {auction?.salary}</p>
      {auction?.id && <CreateBidBtn auctionId={auction.id} />}
      <OfferList offers={offers} />
    </div>
  );
}
