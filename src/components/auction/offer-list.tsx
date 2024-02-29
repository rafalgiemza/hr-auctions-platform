import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

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
          <Card key={offer.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              {/* <CardTitle className="text-sm font-medium">Bid author</CardTitle> */}
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">{offer.title}</div>
              <p className="text-md">{offer?.description?.substring(0, 300)}</p>
              <p className="text-md">{offer?.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
