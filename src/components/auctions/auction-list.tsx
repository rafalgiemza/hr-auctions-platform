import Link from "next/link";
import { api } from "~/trpc/server";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

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

export async function AuctionList() {
  const auctions = await api.auction.getAll.query();
  console.log("🚀 ~ AuctionList ~ auctions:", auctions);

  return (
    <div className="grid gap-4 md:grid-cols-2 ">
      {auctions.map((auction) => (
        <Link
          key={auction.id}
          href={`auction/${auction?.id}`}
          className="transition-all hover:scale-105"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {auction.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {auction?.description?.substring(0, 300)}
              </p>
              <Badge variant="secondary">{auction.salary}</Badge>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
