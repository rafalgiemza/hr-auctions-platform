import { AuctionList } from "~/components/auctions/auction-list";
import { CreateAuctionModal } from "~/components/auctions/create-auction-modal";
import { BreadCrumbs } from "~/components/main-layout/bread-crumbs";
import { getServerAuthSession } from "~/server/auth";

export default async function AuctionsPage() {
  const session = await getServerAuthSession();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumbs items={["Auctions"]} />
      {session && <CreateAuctionModal />}
      <AuctionList />
    </div>
  );
}
