import { ScrollArea } from "~/components/ui/scroll-area";

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

interface OfferListProps {
  offers: Auction[];
}

export function OfferList({ offers }: OfferListProps) {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all"
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{offer.title}</div>
                </div>
              </div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {offer?.description?.substring(0, 300)}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
