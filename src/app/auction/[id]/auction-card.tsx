import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface Auction {
  title: string | null;
  id: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date | null;
  description: string | null;
  salary: string | null;
  priceUnit: string | null;
}

interface AuctionCardProps {
  auction: Auction;
}

export const AuctionCard = (props: AuctionCardProps) => {
  const { title, description, salary } = props.auction;

  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm ">
          <div className="flex items-center gap-4 py-4">
            {/* {keyWords?.split(",").map((item) => (
              <div className="flex items-center" key={item}>
                <CheckCircle className="mr-1 h-3 w-3 " />
                {item}
              </div>
            ))} */}
          </div>
        </div>
        <div className="flex space-x-4 text-sm ">
          <div className="flex items-center">{`Salary: ${salary}`}</div>
        </div>
      </CardContent>
    </Card>
  );
};
