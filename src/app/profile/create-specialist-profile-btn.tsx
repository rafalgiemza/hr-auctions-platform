"use client";

import React, { useState } from "react";
import { CreateCandidateProfile } from "~/components/forms/profile/candidate/create-profile";
import { ResponsiveDialog } from "~/components/shared/responsive-dialog";

export const CreateSpecialistProfileBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-auto mr-4">
      <ResponsiveDialog
        open={isOpen}
        setOpen={setIsOpen}
        title="Create specialist profile"
      >
        <CreateCandidateProfile setOpen={setIsOpen} />
      </ResponsiveDialog>
    </div>
  );
};
