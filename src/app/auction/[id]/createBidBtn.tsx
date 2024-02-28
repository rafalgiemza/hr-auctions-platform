"use client";

import React, { useState } from "react";
import { CreateOffer } from "~/components/forms/offer/create-offer";
import { ResponsiveDialog } from "~/components/shared/responsive-dialog";

interface CreateBidBtnProps {
  auctionId: number;
}

export const CreateBidBtn = (props: CreateBidBtnProps) => {
  const { auctionId } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-auto mr-4">
      <ResponsiveDialog open={isOpen} setOpen={setIsOpen} title="Create bid">
        <CreateOffer setOpen={setIsOpen} auctionId={auctionId} />
      </ResponsiveDialog>
    </div>
  );
};
