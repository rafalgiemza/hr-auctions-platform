"use client";

import { useState } from "react";
import { CreateCandidateProfile } from "~/components/forms/profile/candidate/create-profile";
import { CreateRecruiterProfile } from "~/components/forms/profile/recruiter/create-profile";
import { ResponsiveDialog } from "~/components/shared/responsive-dialog";

export function AddNewProfileSection() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <ResponsiveDialog
        open={open1}
        setOpen={setOpen1}
        title="Create Specialist profile"
      >
        <CreateCandidateProfile setOpen={setOpen1} />
      </ResponsiveDialog>

      <ResponsiveDialog
        open={open2}
        setOpen={setOpen2}
        title="Create Head Hunter profile"
      >
        <CreateRecruiterProfile setOpen={setOpen2} />
      </ResponsiveDialog>
    </>
  );
}
