import { AuctionList } from "~/components/auctions/auction-list";
import { CreateAuctionModal } from "~/components/auctions/create-auction-modal";
import { BreadCrumbs } from "~/components/main-layout/bread-crumbs";
import { api } from "~/trpc/server";

export default async function AuctionsPage() {
  const user = await api.candidateProfile.getMyProfiles.query();
  const userProfileId = user?.candidateProfiles.at(0)?.id?.toString();

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumbs items={["Auctions"]} />
      {userProfileId && <CreateAuctionModal userProfileId={userProfileId} />}
      <AuctionList />
    </div>
  );
}
