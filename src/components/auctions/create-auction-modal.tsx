"use client";

import { useState } from "react";
import { ResponsiveDialog } from "../shared/responsive-dialog";
import { CreateAuction } from "../forms/auction/create-auction";

interface CreateAuctionModalProps {
  userProfileId: string;
}

export function CreateAuctionModal({ userProfileId }: CreateAuctionModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <ResponsiveDialog open={open} setOpen={setOpen} title="Create auction">
      <CreateAuction setOpen={setOpen} userProfileId={userProfileId} />
    </ResponsiveDialog>
  );
}
