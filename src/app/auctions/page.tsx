import { AuctionList } from "~/components/auctions/auction-list";
import { CreateAuction } from "~/components/forms/auction/create-auction";
import { BreadCrumbs } from "~/components/main-layout/bread-crumbs";
import { ResponsiveDialog } from "~/components/shared/responsive-dialog";
import { api } from "~/trpc/server";

export default async function AuctionsPage() {
  const auctions = await api.auction.getAll.query();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumbs items={["Auctions"]} />

      <ResponsiveDialog title="Create auction">
        <CreateAuction />
      </ResponsiveDialog>

      <AuctionList auctions={auctions} />
    </div>
  );
}
