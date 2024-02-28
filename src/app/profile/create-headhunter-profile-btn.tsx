"use client";

import React, { useState } from "react";
import { CreateRecruiterProfile } from "~/components/forms/profile/recruiter/create-profile";
import { ResponsiveDialog } from "~/components/shared/responsive-dialog";

export const CreateHeadhunterProfileBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-auto mr-4">
      <ResponsiveDialog
        open={isOpen}
        setOpen={setIsOpen}
        title="Create headhunter profile"
      >
        <CreateRecruiterProfile setOpen={setIsOpen} />
      </ResponsiveDialog>
    </div>
  );
};
