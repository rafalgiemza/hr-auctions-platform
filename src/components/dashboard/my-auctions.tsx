import Link from "next/link";
import { api } from "~/trpc/server";

export async function MyAuctions() {
  const myAuctions = await api.auction.getAllMyAuctions.query();
  console.log("🚀 ~ MyAuctions ~ myAuctions:", myAuctions);

  if (myAuctions.length === 0) return "No auctions yet...";

  return (
    <div className="space-y-8">
      {myAuctions.map((item) => (
        <Link href={`/auction/${item.id}`} key={item.id}>
          <div className="flex items-center">
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{item.title}</p>
              <p className="p-4 text-sm text-muted-foreground">
                {`${item.description?.slice(0, 100)}...`}
              </p>
            </div>
            <div className="ml-auto font-medium">{item.salary}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
