import { ScrollArea } from "~/components/ui/scroll-area";
import Link from "next/link";

interface Auction {
  id: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date | null;
  description: string | null;
  title: string | null;
  price: number | null;
  priceUnit: string | null;
}

interface AuctionListProps {
  auctions: Auction[];
}

export function AuctionList({ auctions }: AuctionListProps) {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2">
        {auctions.map((auction) => (
          <Link
            key={auction.id}
            href={`auction/${auction?.id}`}
            className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{auction.title}</div>
                </div>
              </div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {auction?.description?.substring(0, 300)}
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}
